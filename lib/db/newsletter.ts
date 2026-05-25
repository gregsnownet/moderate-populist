// lib/db/newsletter.ts
// DynamoDB-backed newsletter subscriber store.
//
// Table schema (create in AWS once):
//   TableName: ModeratePopulist_Newsletter (override via DYNAMODB_NEWSLETTER_TABLE)
//   Partition key: pk  (string)  — "EMAIL#<lowercased-email>"
//   Sort key:      sk  (string)  — "SUBSCRIPTION"
//
// Each item also stores email (normalized), subscribedAt (ISO), ip, country,
// source (which form), and userAgent.

import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { docClient, NEWSLETTER_TABLE } from "./dynamodb";

export interface NewsletterRecord {
  email: string;
  subscribedAt: string; // ISO timestamp
  ip: string | null;
  country: string;
  source: string;
  userAgent: string | null;
}

export interface SubscribeResult {
  /** true if this email was newly inserted; false if it was already subscribed. */
  created: boolean;
}

/**
 * Insert a newsletter subscriber. Idempotent: a second signup for the same
 * email is rejected by a ConditionExpression and reported as
 * `{ created: false }` so callers can give a friendly UX without losing
 * the original subscription time.
 */
export async function subscribeEmail(
  input: NewsletterRecord,
): Promise<SubscribeResult> {
  const normalized = input.email.trim().toLowerCase();

  try {
    await docClient.send(
      new PutCommand({
        TableName: NEWSLETTER_TABLE,
        Item: {
          pk: `EMAIL#${normalized}`,
          sk: "SUBSCRIPTION",
          email: normalized,
          subscribedAt: input.subscribedAt,
          ip: input.ip,
          country: input.country,
          source: input.source,
          userAgent: input.userAgent,
        },
        ConditionExpression: "attribute_not_exists(pk)",
      }),
    );
    return { created: true };
  } catch (err: unknown) {
    if (
      err instanceof Error &&
      (err.name === "ConditionalCheckFailedException" ||
        (err as { __type?: string }).__type?.includes("ConditionalCheckFailed"))
    ) {
      return { created: false };
    }
    throw err;
  }
}

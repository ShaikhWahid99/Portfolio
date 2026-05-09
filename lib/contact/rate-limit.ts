const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS = 5;

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export function allowContactSubmission(clientKey: string): boolean {
  const now = Date.now();
  const existing = buckets.get(clientKey);

  if (!existing || now > existing.resetAt) {
    buckets.set(clientKey, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (existing.count >= MAX_SUBMISSIONS) {
    return false;
  }

  existing.count += 1;
  return true;
}

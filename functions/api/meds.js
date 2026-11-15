import { neon } from '@neondatabase/serverless';

async function withRetry(fn, retries = 3, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise((r) => setTimeout(r, delay));
    }
  }
}

export async function onRequestGet(context) {
  const sql = neon(context.env.DATABASE_URL);
  const rows = await withRetry(() => sql`SELECT id, data FROM meds ORDER BY updated_at DESC`);
  return new Response(JSON.stringify(rows), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function onRequestPut(context) {
  const sql = neon(context.env.DATABASE_URL);
  const body = await context.request.json();
  const { id, data } = body;

  if (id) {
    await withRetry(() => sql`
      INSERT INTO meds (id, data, updated_at)
      VALUES (${id}, ${data}, NOW())
      ON CONFLICT (id) DO UPDATE SET data = ${data}, updated_at = NOW()
    `);
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

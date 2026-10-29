import { Client } from '@neondatabase/serverless';

export async function onRequestGet(context) {
  const client = new Client(context.env.DATABASE_URL);
  await client.connect();

  try {
    const { rows } = await client.query('SELECT id, data FROM medikamente ORDER BY created_at DESC');
    return new Response(JSON.stringify(rows), {
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    await client.end();
  }
}

export async function onRequestPost(context) {
  const client = new Client(context.env.DATABASE_URL);
  await client.connect();

  try {
    const body = await context.request.json();
    const { id, data } = body;

    if (id) {
      await client.query('UPDATE medikamente SET data = $1, updated_at = NOW() WHERE id = $2', [data, id]);
    } else {
      await client.query('INSERT INTO medikamente (user_id, data) VALUES ($1, $2)', ['default', data]);
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    await client.end();
  }
}

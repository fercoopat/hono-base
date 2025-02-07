import { serve } from '@hono/node-server';
import app from 'app.js';
import { PORT } from 'config/envs.js';

const port = +PORT;

console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});

import app from '@/app.js';
import { PORT } from '@/config/envs.js';
import { serve } from '@hono/node-server';

const port = PORT;

console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});

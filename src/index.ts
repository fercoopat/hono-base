import app from '@/app.js';
import { PORT as port } from '@/config/envs.js';
import { serve } from '@hono/node-server';

console.info(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});

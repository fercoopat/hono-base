import { useRoutes } from 'helpers/use-routes.js';
import { Hono } from 'hono/tiny';
import type { Bindings } from 'types/app.type.js';

const app = new Hono<{ Bindings: Bindings }>();

useRoutes(app);

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

export default app;

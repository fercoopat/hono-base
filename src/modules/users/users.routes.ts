import type { AppOptions } from '@/types/app.type.js';
import { Hono } from 'hono/tiny';

const usersRoutes = new Hono<AppOptions>();

usersRoutes.get('', (c) => {
  return c.json({ users: [] });
});

export default usersRoutes;

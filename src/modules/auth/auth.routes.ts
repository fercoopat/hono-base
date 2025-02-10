import { registerUserValidator } from '@/modules/users/users.schemas.js';
import type { AppOptions } from '@/types/app.type.js';
import { Hono } from 'hono/tiny';

const authRoutes = new Hono<AppOptions>();

authRoutes.post('/register', registerUserValidator, (c) => {
  return c.json({ message: 'User registered' });
});

export default authRoutes;

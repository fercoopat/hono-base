import type { Context } from 'hono';

export const notFoundHandler = (c: Context) => {
  return c.text('Custom 404 Message', 404);
};

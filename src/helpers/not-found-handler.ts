import type { Context } from 'hono';

export const notFoundHandler = (c: Context) => {
  return c.text('Not Found', 404);
};

import type { HttpBindings } from '@hono/node-server';
import type { Hono } from 'hono/tiny';

export type Bindings = HttpBindings & {
  PORT?: number;
};

export type App = Hono<{
  Bindings: Bindings;
}>;

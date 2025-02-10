import type { HttpBindings } from '@hono/node-server';
import type { Hono } from 'hono/tiny';

export interface Envs {
  PORT?: number;
}

export type Bindings = HttpBindings & Envs;

export interface AppOptions {
  Bindings: Bindings;
}

export type App = Hono<AppOptions>;

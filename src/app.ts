import { errorHandler } from '@/helpers/error-handler.js';
import { notFoundHandler } from '@/helpers/not-found-handler.js';
import usersRoutes from '@/modules/users/users.routes.js';
import type { AppOptions } from '@/types/app.type.js';
import { logger } from 'hono/logger';
import { poweredBy } from 'hono/powered-by';
import { prettyJSON } from 'hono/pretty-json';
import { Hono } from 'hono/tiny';

const app = new Hono<AppOptions>().basePath('/api');

// MIDDLEWARES
app.use(poweredBy());
app.use(prettyJSON());
app.use(logger());

// ROUTES
app.route('/users', usersRoutes);

app.notFound(notFoundHandler);

app.onError(errorHandler);

export default app;

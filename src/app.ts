import { useRoutes } from '@/helpers/use-routes.js'
import type { AppOptions } from '@/types/app.type.js'
import { Hono } from 'hono/tiny'

const app = new Hono<AppOptions>()

useRoutes(app)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app

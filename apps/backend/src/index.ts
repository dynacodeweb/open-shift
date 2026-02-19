import { serve } from '@hono/node-server';
import { Scalar } from '@scalar/hono-api-reference';
import { auth, ServerSession } from '@workspace/auth/server';
import { config } from 'dotenv';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { showRoutes } from 'hono/dev';
import { logger } from 'hono/logger';
import { poweredBy } from 'hono/powered-by';
import authors from './routers/authors.js';
import books from './routers/books.js';

config({ path: '.env.local' });

const app = new Hono<{
  Variables: {
    user: ServerSession['user'] | null;
    session: ServerSession['session'] | null;
  };
}>();

app.use(poweredBy());
app.use(logger());

const allowOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((origin) => origin.trim())
  : ['http://localhost:3001']; // default to localhost if not set

console.log('Allowed origins:', allowOrigins);

app.use(
  '/api/auth/*', // or replace with "*" to enable cors for all routes
  cors({
    origin: allowOrigins,
    allowHeaders: ['Content-Type', 'Authorization'],
    allowMethods: ['POST', 'GET', 'PUT', 'DELETE'],
    exposeHeaders: ['Content-Length'],
    maxAge: 600,
    credentials: true,
  }),
);

app.use('*', async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) {
    c.set('user', null);
    c.set('session', null);
    await next();
    return;
  }
  c.set('user', session.user);
  c.set('session', session.session);
  await next();
});

app.on(['POST', 'GET'], '/api/auth/*', (c) => {
  return auth.handler(c.req.raw);
});

app.get('/', async (c) => {
  // const openAPISchema = await auth.api.generateOpenAPISchema();
  // console.log(openAPISchema);
  return c.json({
    status: 'ok',
    message: 'Welcome to the Open shift API',
    // openAPISchema,
  });
});

app.get(
  '/docs',
  Scalar({
    pageTitle: 'Backend API Documentation',
    sources: [
      {
        title: 'Auth',
        url: '/api/auth/open-api/generate-schema',
      },
    ],
    isEditable: false,
    title: 'Backend API Reference',
  }),
);

app.get('/session', (c) => {
  const session = c.get('session');
  const user = c.get('user');

  if (!user) return c.body(null, 401);

  return c.json({
    session,
    user,
  });
});

app.route('/v1', authors);
app.route('/v1', books);

showRoutes(app, {
  verbose: true,
  colorize: true,
});

const port = Number(process.env.PORT) || 3000;

console.log(`Backend listening on http://localhost:${port}`);
serve({ fetch: app.fetch, port });

export default app;

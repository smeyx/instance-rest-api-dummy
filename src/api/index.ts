import Router from 'koa-router';
import connectionsEndpoint from './connections';
import alertsEndpoint from './alerts';
import instanceEndpoint from './instance';
import type Koa from 'koa';

// put in config
const apiVersion = 'v1';

export default function applyRoutes(app: Koa): void {
  const router = new Router({
    prefix: `/api/${apiVersion}`,
  });
  
  //automate
  router.use(connectionsEndpoint.routes());
  router.use(alertsEndpoint.routes());
  router.use(instanceEndpoint.routes());

  app.use(router.routes())
    .use(router.allowedMethods());
}
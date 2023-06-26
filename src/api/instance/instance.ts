import Router from 'koa-router';
import type { IRouterOptions } from 'koa-router';

const routeOptions: IRouterOptions = {
  prefix: '/instance',
}

const instanceEndpoint = new Router(routeOptions);

instanceEndpoint.get('/', async ctx => {
  const data = {
    title: 'Instance 1',
    version: '1.0.5',
    webURL: '192.199.128.54',
    port: 5000,
  }

  ctx.body = data;
});

export default instanceEndpoint;

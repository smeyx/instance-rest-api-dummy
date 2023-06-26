import type { Connection } from '.';
import Router from 'koa-router';
import type { IRouterOptions } from 'koa-router';

const connections: Connection[] = new Array();

const numberOfConnections = Math.floor(Math.random() * 500) + 20;
for(let i = 0; i < numberOfConnections; i++) {
  const getBlock = () => Math.floor(Math.random() * 255) + 1;
  const port = Math.floor(Math.random() * 65535) + 1;

  const connection: Connection = {
    addr: `${ getBlock() }.${ getBlock() }.${ getBlock() }.${ getBlock() }`,
    port,
    detected: new Date(),
  }

  connections.push(connection);
}

const routeOptions: IRouterOptions = {
  prefix: '/connections',
}

const connectionsEndpoint = new Router(routeOptions);

connectionsEndpoint.get('/', async ctx => {
  const data = {
    meta: {
      total: connections.length,
    },
    items: connections
  }

  ctx.body = data;
});

export default connectionsEndpoint;

import type { Alert } from './';
import Router from 'koa-router';
import type { IRouterOptions } from 'koa-router';

const types = ['info', 'alert', 'error'];
const alerts: Alert[] = new Array();

for(let i = 0; i < 250; i++) {
  const typeIndex = Math.floor(Math.random() * 3);
  const levelIndex = Math.floor(Math.random() * 3) + 1;

  const alarm: Alert = {
    name: 'Name',
    type: types[typeIndex],
    description: 'This is a alarm',
    level: levelIndex,
  }

  alerts.push(alarm);
}

const routeOptions: IRouterOptions = {
  prefix: '/alerts',
}

const alertsEndpoint = new Router(routeOptions);

alertsEndpoint.get('/', async ctx => {
  const data = {
    meta: {
      total: alerts.length,
    },
    items: alerts
  }

  ctx.body = data;
});

export default alertsEndpoint;

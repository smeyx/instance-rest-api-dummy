import Koa from 'koa';
import applyRoutes from './api';

const app = new Koa();
app.use( async (ctx, next) => {
  try {
    await next();
  } catch(error) {
    ctx.app.emit('Error', error, ctx);
  }
});

app.on('error', console.error);

applyRoutes(app);

export default app;

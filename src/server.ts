import app from './app';
import applyRoutes from './api';

applyRoutes(app);

const port = 3000;
app.listen(
  port, 
  () => console.info(`App listening on port ${ port }`)
);

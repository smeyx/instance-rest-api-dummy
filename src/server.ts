import app from './app';

const port = 3000;
app.listen(
  port, 
  () => console.info(`App listening on port ${ port }`)
);

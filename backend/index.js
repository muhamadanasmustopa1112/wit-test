require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const articlesRouter = require('./routes/articles');
const authorsRouter = require('./routes/auth');

const app = new Koa();
app.use(bodyParser());

app.use(authorsRouter.routes()).use(authorsRouter.allowedMethods());
app.use(articlesRouter.routes()).use(articlesRouter.allowedMethods());

app.use(async (ctx, next) => {

  try {
    await next();

  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: 'Internal Server Error'
    }
  }
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
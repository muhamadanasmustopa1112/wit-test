const Router = require('koa-router');
const jwt = require('jsonwebtoken');

const authRouter = new Router();
const secretKey = process.env.JWT_SECRET;

authRouter.post('/api/login', async (ctx) => {
    
    const username = ctx.request.body.username;
    const password = ctx.request.body.password;

    if (username === 'admin' && password === 'admin123') {
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        ctx.body = { token };
    } else {
        ctx.status = 401;
        ctx.body = { error: 'Invalid credentials' };
        return;
    }
});


module.exports = authRouter;
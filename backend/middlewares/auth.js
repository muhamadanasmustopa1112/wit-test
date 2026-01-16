const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

async function authMiddleware(ctx, next) {
    const authHeader = ctx.headers['authorization'];
    if (!authHeader) {
        ctx.status = 401;
        ctx.body = { error: 'Authorization header missing' };
        return;
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        ctx.status = 401;
        ctx.body = { error: 'Token missing' };
        return;
    }
    try {
        const decoded = jwt.verify(token, secret);
        ctx.state.user = decoded;
        await next();
    } catch (err) {
        ctx.status = 401;
        ctx.body = { error: 'Invalid or expired token' };
    }
}

module.exports = authMiddleware;


const router = require('koa-router');
const queries = require('../db/queries/articles');
const authMiddleware = require('../middlewares/auth');

const articlesRouter = new router();

articlesRouter.get('/api/articles', async (ctx) => {
    try {

        const page = Number(ctx.query.page) || 1;
        const limit = Number(ctx.query.limit) || 10;
        const status = ctx.query.status;

        const articles = await queries.getAllArticles({ page, limit, status });
        const { total } = await queries.countArticles(status);

        ctx.body = {
            status: 'success',
            data: articles,
            meta: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        };

    } catch (err) {
        ctx.status = 500;
        ctx.body = { error: 'Failed to fetch articles' };
    }
});

articlesRouter.get('/api/articles/:id', async (ctx) => {
    try {
        const article = await queries.getArticleById(ctx.params.id);
        if (!article) {
            ctx.status = 404;
            ctx.body = { 
                status: 'error',
                message: 'Article not found' 
            };
            return;
        }
        ctx.body = {
            status: 'success',
            data: article
        };
    } catch (err) {
        ctx.status = 500;
        ctx.body = { error: 'Failed to fetch article' };
    }
});

articlesRouter.get('/api/articles/slug/:slug', async (ctx) => {
    try {
        const article = await queries.getArticlesBySlug(ctx.params.slug);
        if (!article) {
            ctx.status = 404;
            ctx.body = { 
                status: 'error',
                message: 'Article not found' 
            };
            return;
        }
        ctx.body = {
            status: 'success',
            data: article
        };
    } catch (err) {
        ctx.status = 500;
        ctx.body = { error: 'Failed to fetch article' };
    }
});

articlesRouter.post('/api/articles', authMiddleware,  async (ctx) => {
    try {
        const {title, content, slug, status, excerpt} = ctx.request.body;
        if (!title || !content || !slug || !status) {
            ctx.status = 400;
            ctx.body = { error: 'title, content, slug, and status are required' };
            return;
        }
        const payload = {
            title,
            slug,
            content,
            excerpt,
            status,
            published_at: status === 'published' ? new Date() : null

        }
        console.log(payload);
        const [newArticle] = await queries.addArticle(payload);

        ctx.status = 201;
        ctx.body = {
            status: 'success',
            data: newArticle
        };

    } catch (err) {
        ctx.status = 500;
        ctx.body = { error: 'Failed to create article' };
    }
    
})

articlesRouter.put('/api/articles/:id', authMiddleware, async (ctx) => {
    try {
        const [article] = await queries.updateArticle(ctx.params.id, ctx.request.body);

        if (!article) {
            ctx.status = 404;
            ctx.body = { 
                status: 'error',
                message: 'Article not found' 
            };
            return;
        }

        ctx.body = {
            status: 'success',
            data: article
        }

    } catch (err) {
        ctx.status = 500;
        ctx.body = {
            status: 'error',
            message: 'Failed to update article'
        }
    }
})

articlesRouter.delete('/api/articles/:id', authMiddleware, async (ctx) => {
    try {
        const id = Number(ctx.params.id);
        const [article] = await queries.getArticleById(id);
        
        if (!article) {
            ctx.status = 404;
            ctx.body = {
                status: 'error',
                message: 'Article not found'
            }
            return;
        }

        await queries.deleteArticle(ctx.params.id);

        ctx.status = 200;
        ctx.body = {
            status : 'success',
            message: 'Article deleted successfully'
        }
        
    } catch (err) {
        ctx.status = 500;
        ctx.body = {
            status: 'error',
            message: 'Failed to delete article'
        }
    }
})

module.exports = articlesRouter;






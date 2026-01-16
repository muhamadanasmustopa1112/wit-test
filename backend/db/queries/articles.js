const knex = require('../connection');

function getAllArticles({page = 1, limit = 10, status}) {
    const query = knex('articles').select('*');
    if (status) {
        query.where({ status });
    }

    return query.orderBy('created_at', 'desc')
        .limit(limit)
        .offset((page - 1) * limit);
}

function countArticles(status) {
  const query = knex('articles').count('* as total');
  if (status) {
    query.where({ status });
  }
  return query.first();
}

function getArticleById(id) {
  return knex('articles')
    .select('*')
    .where({  id: parseInt(id) });
}

function getArticlesBySlug(slug) {
  return knex('articles')
    .where({ slug })
    .first();
}

function addArticle(article) {
  return knex('articles')
    .insert(article)
    .returning('*');
}

function updateArticle(id, article) {
  return knex('articles')
    .where({  id: parseInt(id) })
    .update(article)
    .returning('*');
}

function deleteArticle(id) {
  return knex('articles')
    .where({  id: parseInt(id) })
    .del();
}

module.exports = {
    getAllArticles,
    getArticleById,
    getArticlesBySlug,
    addArticle,
    updateArticle,
    deleteArticle,
    countArticles
}
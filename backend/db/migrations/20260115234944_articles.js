
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', function(table) {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('slug').notNullable().unique();
    table.text('content').notNullable();  
    table.text('excerpt');  
    table.enu('status', ['draft', 'published']).notNullable().defaultTo('draft');
    table.timestamp('published_at').nullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('articles');
};

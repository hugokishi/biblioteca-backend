
exports.up = function(knex) {
  return knex.schema.createTable('projects', function(table){
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('company').notNullable();
    table.string('photo').notNullable();
    table.string('authors').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects');
};

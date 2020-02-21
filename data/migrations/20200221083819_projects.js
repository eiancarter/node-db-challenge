
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('project_name', 128)
            .unique()
            .notNullable();
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.integer('task_number')
            .unsigned()
            .notNullable();
        tbl.text('description')
            .notNullable();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};

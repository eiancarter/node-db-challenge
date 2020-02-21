
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('project_name', 128)
            .unique()
            .notNullable();
        tbl.text('description')
            .notNullable();
        tbl.boolean('completed')
            .defaultTo(false)
            .notNullable();
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.integer('task_number')
            .unsigned()
            .notNullable();
        tbl.text('description')
            .notNullable();
        tbl.text('notes')
            .notNullable();
        tbl.boolean('completed')
            .defaultTo(false)
            .notNullable();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 128)
            .notNullable();
        tbl.text('description')
            .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};

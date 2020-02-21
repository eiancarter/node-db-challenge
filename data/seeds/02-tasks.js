
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_number: 1, description: 'description', notes: 'notes', completed: 0, project_id: 1},
        {id: 2, task_number: 2, description: 'description', notes: 'notes', completed: 0, project_id: 1},
        {id: 3, task_number: 3, description: 'description', notes: 'notes', completed: 0, project_id: 1},
        {id: 4, task_number: 4, description: 'description', notes: 'notes', completed: 0, project_id: 2},
      ]);
    });
};

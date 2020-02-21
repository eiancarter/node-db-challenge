
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'rowValue1', description: 'description', completed: 0},
        {id: 2, project_name: 'rowValue2', description: 'description', completed: 0},
        {id: 3, project_name: 'rowValue3', description: 'description', completed: 0},
      ]);
    });
};

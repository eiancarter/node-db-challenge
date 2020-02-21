
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'rowValue1', description: 'description'},
        {id: 2, name: 'rowValue2', description: 'description'},
        {id: 3, name: 'rowValue3', description: 'description'},
      ]);
    });
};

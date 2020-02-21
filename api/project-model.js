const db = require("../data/dbConfig");

module.exports={
    find,
    findById,
    findTasks,
    add,
    update,
    remove
};

function find() {
    return db("projects")
}

function findById(id) {
    return db("projects")
    .where({id: Number(id) });
}

function findTasks() {
    return db("tasks")
}

function add(project) {
    // schemeData
    return db("projects")
    .insert(project, "id")
    .then(([id]) => get(id)); 
}

function update(id, changes) {
    return db("projects")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? get(id) : null))
}

function remove(id) {
    return db("projects")
    .where("id", id)
    .del()
}
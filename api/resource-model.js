const db = require("../data/dbConfig");

module.exports={
    find,
    findById,
    add,
    update,
    remove
};

function find() {
    return db("resources")
}

function findById(id) {
    return db("resources")
    .where({id: Number(id) });
}

function add(resource) {
    // schemeData
    return db("resources")
    .insert(resource, "id")
    .then(([id]) => get(id)); 
}

function update(id, changes) {
    return db("resources")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? get(id) : null))
}

function remove(id) {
    return db("resources")
    .where("id", id)
    .del()
}
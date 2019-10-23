const db = require("../data/dbConfig.js");

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

function find() {
    return db("test");
}

function findBy(filter) {
    return db("test").where(filter);
}

async function add(test) {
    const [id] = await db("test").insert(test, "id");

    return findById(id);
}

async function update(id, changes) {
    await db("test")
        .where({ id })
        .update(changes);

    return findById(id)
}

function findById(id) {
    return db("test")
        .where({ id })
        .first();
}

function remove(id) {
    return db("test")
        .where({ id })
        .del();
}
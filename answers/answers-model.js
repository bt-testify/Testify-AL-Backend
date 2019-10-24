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
    return db("answer");
}

function findBy(filter) {
    return db("answer").where(filter);
}

async function add(answer) {
    const [id] = await db("answer").insert(answer, "id");

    return findById(id);
}

async function update(id, changes) {
    await db("answer")
        .where({ id })
        .update(changes);

    return findById(id)
}

function findById(id) {
    return db("answer")
        .where({ id })
        .first();
}

function remove(id) {
    return db("answer")
        .where({ id })
        .del();
}

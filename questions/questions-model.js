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
    return db("question");
}

function findBy(filter) {
    return db("question").where(filter);
}

async function add(question) {
    const [id] = await db("question").insert(question, "id");

    return findById(id);
}

async function update(id, changes) {
    await db("question")
        .where({ id })
        .update(changes);

    return findById(id)
}

function findById(id) {
    return db("question")
        .where({ id })
        .first();
}

function remove(id) {
    return db("question")
        .where({ id })
        .del();
}
const db = require("../data/dbConfig.js");

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    getQuestionsByTest
};

function find() {
    return db("test")
        .join("user", "test.user_id", "user.id")
        .select("test.id", "test.title", "test.score", "test.created_at", "test.user_id",
            "user.username", "user.name")
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

function getQuestionsByTest(id) {
    return db("question").where({ "test_id": id });
}
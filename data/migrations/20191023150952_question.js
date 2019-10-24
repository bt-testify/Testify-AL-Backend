
exports.up = function (knex) {
    return knex.schema.createTable('question', question => {
        question.increments();

        question.string('text', 500)

        question.integer('test_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('test')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('question');
};


exports.up = function (knex) {
    return knex.schema.createTable('answer', answer => {
        answer.increments();

        answer.string('option', 500)
            .notNullable();

        answer.boolean('isCorrect')

        answer.integer('question_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('question')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('answer');
};

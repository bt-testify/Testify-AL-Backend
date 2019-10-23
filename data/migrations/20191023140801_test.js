
exports.up = function (knex) {
    return knex.schema.createTable('test', test => {
        test.increments();

        test.string('title', 128)
            .notNullable();

        test.integer('score');

        test.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());

        test.integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('user')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('test');
};

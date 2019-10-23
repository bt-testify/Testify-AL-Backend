
exports.up = function (knex) {
    return knex.schema.createTable('user', user => {
        user.increments();

        user
            .string('username', 128)
            .notNullable()
            .unique();

        user
            .string('password', 128)
            .notNullable();

        user.string('name', 128)

        user.string('email', 128)

        user.boolean('isTeacher')
            .defaultTo(false);

    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};

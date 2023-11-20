/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('diarys', function (table) {
      table.increments('id').primary();
      table.string('firstname', 30);
      table.string('lastname', 30);
      table.string('diary', 300);
      table.date('date').notNullable();

    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('diarys');
  };
"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserLiberationTypeSchema extends Schema {
  up() {
    this.create("user_liberation_types", table => {
      table.increments();
      table
        .integer("user_vehicle_type_id")
        .unsigned()
        .references("id")
        .inTable("user_vehicle_types")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("access_liberation_id")
        .unsigned()
        .references("id")
        .inTable("access_liberations")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("user_liberation_types");
  }
}

module.exports = UserLiberationTypeSchema;

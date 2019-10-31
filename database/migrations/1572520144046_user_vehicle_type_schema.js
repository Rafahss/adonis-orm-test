"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserVehicleTypeSchema extends Schema {
  up() {
    this.create("user_vehicle_types", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("vehicle_type_id")
        .unsigned()
        .references("id")
        .inTable("vehicle_types")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("user_vehicle_types");
  }
}

module.exports = UserVehicleTypeSchema;

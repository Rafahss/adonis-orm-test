"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class VehicleTypeSchema extends Schema {
  up() {
    this.create("vehicle_types", table => {
      table.increments();
      table.string("description", 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("vehicle_types");
  }
}

module.exports = VehicleTypeSchema;

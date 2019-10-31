"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AccessLiberationSchema extends Schema {
  up() {
    this.create("access_liberations", table => {
      table.increments();
      table.string("description", 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("access_liberations");
  }
}

module.exports = AccessLiberationSchema;

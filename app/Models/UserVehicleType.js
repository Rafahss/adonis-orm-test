"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class UserVehicleType extends Model {
  liberation_types() {
    return this.belongsToMany("App/Models/AccessLiberation").pivotTable(
      "user_liberation_types"
    );
  }
}

module.exports = UserVehicleType;

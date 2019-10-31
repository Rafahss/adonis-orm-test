"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class VehicleType extends Model {
  liberation_types() {
    return this.manyThrough("App/Models/UserVehicleType", "liberation_types");
  }
}

module.exports = VehicleType;

"use strict";

const User = use("App/Models/User");

class UserController {
  async showLiberations({ params, auth }) {
    const user = await User.query()
      .with("user_vehicle_types.liberation_types")
      .where("id", params.id)
      .fetch();

    return user;
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { ...data } = request.only(["username", "password"]);

    const user = await User.create({ ...data });

    return response.status(201).json(user);
  }
}

module.exports = UserController;

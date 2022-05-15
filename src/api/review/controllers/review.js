"use strict";

/**
 *  review controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::review.review", ({ strapi }) => ({
  async create(ctx) {},

  async delete(ctx) {},
}));

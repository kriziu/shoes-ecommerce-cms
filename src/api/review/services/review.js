'use strict';

/**
 * review service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::review.review');

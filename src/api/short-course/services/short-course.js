'use strict';

/**
 * short-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::short-course.short-course');

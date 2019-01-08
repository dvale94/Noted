const notedRoutes = require('./noted_routes');

module.exports = function(app, db) {
  notedRoutes(app, db);
  // Other route groups could go here, in the future
};
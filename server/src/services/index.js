const tasks = require('./tasks/tasks.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(tasks);
};

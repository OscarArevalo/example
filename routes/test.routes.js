const testController = require('../controllers/test.controller');

const service = '/test/'

module.exports = (app) => {
    app.route(service).get(testController.test);
    app.route(service +'suma/').post(testController.suma);
    app.route(service + 'user/').get(testController.getUser);
}
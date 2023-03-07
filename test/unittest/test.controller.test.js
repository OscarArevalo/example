const httpMocks = require('node-mocks-http');

const testController = require('../../controllers/test.controller');

let req, res, next;
beforeEach(()=>{
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
});

describe('testController.suma', () => {
    it('Debe existir la funcion de suma', () => {
        expect(typeof testController.suma).toBe('function');
    });
    
    it('El servicio dummy esta corriendo', async () => {
        await testController.getUser(req, res);
        console.log(res);
        expect(res.statusCode).toBe(200);
    });

});
const request = require('supertest');
const app = require('../../app');

const getUserURL = '/test/user/';

describe(getUserURL, () =>{
    it ('GET' + getUserURL, async () => {
        const response = await request(app)
            .get(getUserURL);
        expect(response.statusCode).toBe(200);
    })
})
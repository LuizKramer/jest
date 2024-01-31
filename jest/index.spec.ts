import request from 'supertest';
import app from '../src/api/v1/server';
import Database from '../src/api/v1/configs/Database';
import Logger from '../src/api/v1/helpers/terminal/log';
import env from '../src/api/v1/configs/env';

const log = new Logger();

log.group("Jest Tests");
beforeAll(async () => {
    jest.resetModules();
    log.info("Tests Started");
    log.warning(env.MONGODB, env.PORT);
    await Database.getInstance().connect();
    

});

describe('Sample Test', () => {
    it('should test that GET / returns "Hello World!"', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.text).toBe('Hello World!');
    });
});

afterAll(async () => {
    console.log("Tests Finished");
    await Database.getInstance().close();
}); 
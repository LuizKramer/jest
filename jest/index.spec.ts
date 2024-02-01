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

describe('Mock Tests', () => {
    const mainRoute = '/mock';
    describe('Create Mock', () => {
        it('should insert a mock into database', async () => {
            const route = `${mainRoute}/create`;
            const res = await request(app)
                .post(route)
                .send({
                    "mock-test": "imma a test mock"
                });
            expect(res.status).toBe(201);
        });
    });
    describe('Get Mock', () => {
        it('should get a mock from database', async () => { // Corrected the syntax here
            const route = `${mainRoute}/`;
            const res = await request(app)
                .get(route);
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('mock-test');
        }); // Moved the closing parenthesis to the correct position
    });
});

afterAll(async () => {
    log.group("After All Tests");
    try {
        log.success("Tests Finished");
        log.info("Dropping Collections");
        await Database.getInstance().dropDatabase(env.MONGODB!);
        log.success("Collections Dropped");
    } catch (error) {
        log.error(`Error during cleanup: ${error}`);
    } finally {
        log.info("Closing Connection");
        log.success("Connection Closed");
        await Database.getInstance().close();
        log.groupEnd();
    }
}); 

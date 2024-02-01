import Router from 'express'
import MockController from '../controllers/mockController';
const mockController = new MockController();

const mockRouter = Router();


mockRouter.get('/', mockController.getMock);
mockRouter.post('/create',  mockController.createMock);

export default mockRouter

import MockModel from "../models/mockModel";
import { Request, Response } from "express";
import Logger from "../helpers/terminal/log";

const log = new Logger();
class MockController {

    private mockModel: MockModel;
    constructor() {
        this.mockModel = new MockModel();
    }

    public createMock = async (req: Request, res: Response) => {
        // #swagger.tags = ['Mock']
        // #swagger.summary = 'Some summary...'
        log.group("MockController.createMock");
        try {
            log.info('Creating mock');
            log.warning(req.body);
            const result = await this.mockModel.createMock(req.body);
            log.groupEnd();
            res.status(201).json(result);
        } catch (error) {
            log.error(`Error creating mock: ${error}`);
            log.groupEnd();
            res.status(500).json({ message: "Internal Server Error" });
        }
    }


    public getMock = async (req: Request, res: Response) => {
        // #swagger.tags = ['Mock']
        log.group("MockController.getMock");
        try {
            log.info('Sending response');
            log.groupEnd();
            const result = await this.mockModel.getMock();
            res.status(200).json(result);
        } catch (error) {
            log.error(`Error sending response: ${error}`);
            log.groupEnd();
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

export default MockController;
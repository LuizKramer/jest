import Database from "../configs/Database";
import { MongoClient, Collection, OptionalId } from 'mongodb';
import Logger from '../helpers/terminal/log';
import env from '../configs/env';
const log = new Logger();


class MockModel {
    private client: MongoClient;
    private collection!: Collection<Document>;

    constructor() {
        // Get the MongoDB client instance from the Database singleton.
        log.group("Mock Model Constructor");
        this.client = Database.getInstance().getClient();
        log.success('Mock Model class instantiated');
        log.groupEnd();
    }

    private connectToCollection = async () => {
        try {
            log.group("Connecting to MongoDB Atlas");
            this.collection = await this.client.db(env.MONGODB).collection('users');
            log.info(`Connected to MongoDB Atlas on ${env.MONGODB} database, using users collection`);
            log.groupEnd();
        } catch (error) {
            console.error(`Error connecting to MongoDB Atlas: ${error}`);
            log.groupEnd();
            throw error;
        }
    };

    public createMock = async (data: OptionalId<Document>) => {
        log.group("MockModel.createMock");
        try {
            await this.connectToCollection();
            const result = await this.collection.insertOne(data);
            log.success('Created new mock');
            log.groupEnd();
            return result;
        } catch (error) {
            log.error(`Error creating new mock: ${error}`);
            log.groupEnd();
            throw error;
        }
    }
    public getMock = async () => {
        log.group("MockModel.getMock");
        try {
            await this.connectToCollection();
            const result = await this.collection.findOne({});
            log.success('Retrieved mock');
            log.groupEnd();
            return result;
        } catch (error) {
            log.error(`Error retrieving mock: ${error}`);
            log.groupEnd();
            throw error;
        }
    }
}

export default MockModel;
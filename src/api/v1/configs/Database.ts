import { MongoClient } from 'mongodb';
import Logger from '../helpers/terminal/log';
import env from './env';
const log = new Logger();


/**
 * Database class for managing MongoDB connections.
 */
class Database {
  private client!: MongoClient;
  private atlasUri: string = env.MONGO_URI!;


  /**
   * Creates an instance of the Database class.
   */
  constructor() {
    log.group("Connecting to MongoDB Atlas");
    try {
      this.client = new MongoClient(this.atlasUri);
      log.success('Database class instantiated');
      log.groupEnd();
    } catch (error) {
      log.error(`Error creating MongoClient instance: ${error}`)
      log.groupEnd();
      throw error;
    }
  }

  /**
   * Singleton instance of the Database class.
   */
  private static instance: Database;

  /**
   * Get the singleton instance of the Database class.
   * If the instance does not exist, it creates one.
   * @returns The singleton instance of the Database class.
   */
  static getInstance(): Database {
    log.group("Database.getInstance");
    if (!Database.instance) {
      log.info('Creating new Database instance');
      Database.instance = new Database();
    }
    log.info('Returning Database instance');
    log.groupEnd();
    return Database.instance;
  }

  /**
   * Connects to the MongoDB Atlas database.
   * @throws {Error} Throws an error if the connection fails.
   */
  public connect = async (): Promise<void> => {
    log.group("Database.connect");
    try {
      await this.client.connect();
      log.success('Connected to MongoDB Atlas');
      log.groupEnd();
    } catch (error) {
      console.error(`Error connecting to MongoDB Atlas: ${error}`);
      log.groupEnd();
      throw error;
    }
  };

  /**
   * Closes the connection to the MongoDB Atlas database.
   * @throws {Error} Throws an error if the connection cannot be closed.
   */
  public close = async (): Promise<void> => {
    log.group("Database.close");
    try {
      await this.client.close();
      log.success('Closed connection to MongoDB Atlas');
      log.groupEnd();
    } catch (error) {
      log.error(`Error closing connection to MongoDB Atlas: ${error}`);
      log.groupEnd();
      throw error;
    }
  };

  /**
   * Get the MongoDB client instance.
   * @returns The MongoDB client instance.
   */
  public getClient = (): MongoClient => {
    log.group("Database.getClient");
    log.info('Returning MongoDB client instance');
    log.groupEnd();
    return this.client;
  };
}

export default Database;

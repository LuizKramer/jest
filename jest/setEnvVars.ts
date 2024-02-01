import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

process.env.PORT = '8080';
process.env.MONGODB = "jest-test"
process.env.MONGO_URI = process.env.MONGO_URI_TEST
import dotenv from 'dotenv';
dotenv.config();

const env = {
    PORT : process.env.PORT || 3000,
    MONGO_URI : process.env.MONGO_URI,
    MONGODB : process.env.MONGODB,
    JWT_SECRET : process.env.JWT_SECRET,
    AWS_BUCKET_NAME: process.env.ACC_AWS_BUCKET_NAME,
    AWS_REGION: process.env.ACC_AWS_REGION,
    AWS_ACCESS_KEY: process.env.ACC_AWS_ACCESS_KEY,
    AWS_SECRET_ACCESS_KEY: process.env.ACC_AWS_SECRET_ACCESS_KEY,
    SMTP_DOMAIN: process.env.SMTP_DOMAIN,
    SMTP_PASSWORD : process.env.SMTP_PASSWORD,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_EMAIL: process.env.SMTP_EMAIL,
    SMTP_PORT: process.env.SMTP_PORT,
}

export default env;
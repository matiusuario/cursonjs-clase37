import 'dotenv/config';

const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const PORT = process.env.PORT || 4000;
const DATABASE = process.env.DATABASE;

export { HOST, USER, PASSWORD, PORT, DATABASE };

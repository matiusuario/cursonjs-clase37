import mysql from "mysql2/promise";
import { HOST, USER, PASSWORD, DATABASE } from "./configs.js";

const pool = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
});

export { pool };

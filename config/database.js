import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node-jwt',
    password: 'root'
  } ) ;
connection.connect();



const db = new Sequelize('minipro', 'root', 'root', {
    host : "localhost",
    dialect : "mysql",
    
});

export default db;
// export default connection;
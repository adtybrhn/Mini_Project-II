import { Sequelize } from "sequelize";
import db from "../config/database.js"

const { DataTypes } = Sequelize

const product = db.define('product',{
    id : {
        type: DataTypes.INTEGER,
        primaryKey : true
    },
    name:{
        type: DataTypes.STRING
    },
    quantity:{
        type: DataTypes.INTEGER
    },
    price:{
        type: DataTypes.INTEGER
    }
},{
    createdAt : false,
    updatedAt : false,
    tableName: 'product'
});

export default product;
import { Sequelize } from "sequelize";
import db from "../config/database.js"

const { DataTypes } = Sequelize

const merchant = db.define('merchant',{
    id : {
        type: DataTypes.INTEGER,
        primaryKey : true
    },
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    address:{
        type : DataTypes.STRING
    },
    join_date:{
        type : DataTypes.DATEONLY
    },
    phone_number:{
        type: DataTypes.STRING
    }
},{
    createdAt : false,
    updatedAt : false,
    freezeTableName : true
});

export default merchant;
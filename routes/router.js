import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/dbauth.js';
import authMiddleware from '../middleware/auth.js';
// import {
//     getAllMerchants,
//     getMerchantById,
//     updateMerchant,
//     deleteMerchant
// } from "../controller/merchantController.js";
// import {
//   getAllProducts,
//   getProductById,
//   createProduct,
//   updateProduct,
//   deleteProduct
// } from "../controller/productController.js";

const router = express.Router();

router.post('/register', authMiddleware.validateRegister, (req, res, next)=>{
  db.query(
    `SELECT * FROM merchant WHERE LOWER(name) = LOWER(${db.escape(
      req.body.name
    )});` ,
        (err, result)=>{  
          if(result.length){  
            return res.status(409).send({
              msg: 'This username is already in use!'
            } ) ;
          }else{  
            // username is available
            bcrypt.hash(req.body.password, 10, (err, hash)=>{  
              if(err){  
                return res.status(500).send({
                  msg: err
                } ) ;
              } else {
                // has hashed pw => add to database
                db.query (`INSERT INTO merchant (name, email, password, address, join_date, phone_number ) VALUES 
                  (${db.escape(req.body.name)}, ${db.escape(req.body.email)}, ${db.escape(hash)}, ${db.escape(req.body.address)}, now(), ${db.escape(req.body.phone_number)})`,
                  (err, result) => {
                    if (err) {
                      throw err;
                      return res.status(400).send({
                        msg: err
                      } ) ;
                    }
                    return res.status(201).send({
                      msg: 'Registered!'
                    } ) ;
                  }
                ) ;
              }
            } ) ;
          }
        }
      ) ;
});  

router.post('/login', (req, res, next) => {
  db.query(
      `SELECT * FROM merchant WHERE name = ${db.escape(req.body.name)};`,
      (err, result)=>{  
        // user does not exists
        if(err){  
          throw err;
          return res.status(400).send({
            msg: err
          } ) ;
        }
        if(!result.length){  
          return res.status(401).send({
            msg: 'Username or password is incorrect!'
          } ) ;
        }
       // check password
        bcrypt. compare (
          req.body.password,
          result[0]['password'],
          ( bErr, bResult ) => {  
           // wrong password
            if(bErr){  
              throw bErr;
              return res.status(401).send({
                msg: 'Username or password is incorrect!'
              } ) ;
            }
            if (bResult) {
              const token = jwt.sign({
                  username: result[0].username,
                  userId: result[0].id
                } ,
                'SECRETKEY', {
                  expiresIn: '7d'
                }
              ) ;
              db.query(
                `UPDATE merchant SET last_login = now() WHERE id = '${result[0].id}'`
              ) ;
              return res.status(200).send({
                msg: 'Logged in!',
                token,
                user: result[0]
              } ) ;
            }
            return res.status(401).send({
              msg: 'Username or password is incorrect!'
            } ) ;
          }
        ) ;
      }
    ) ;
});

// // merchant route
// router.get('/', authMiddleware.isLoggedIn, getAllMerchants, (req, res, next) => {
// });
// router.get('/:id', authMiddleware.isLoggedIn, getMerchantById, (req, res, next) => {
// });
// router.patch('/:id', authMiddleware.isLoggedIn, updateMerchant, (req, res, next) => {
// });
// router.delete('/:id', authMiddleware.isLoggedIn, deleteMerchant, (req, res, next) => {
// });

// // product route
// router.get('/', authMiddleware.isLoggedIn, getAllProducts, (req, res, next) => {
// });
// router.get('/:id', authMiddleware.isLoggedIn, getProductById, (req, res, next) => {
// });
// router.post('/', authMiddleware.isLoggedIn, createProduct, (req, res, next) => {
// });
// router.patch('/:id', authMiddleware.isLoggedIn, updateProduct, (req, res, next) => {
// });
// router.delete('/:id', authMiddleware.isLoggedIn, deleteProduct, (req, res, next) => {
// });

export default router;
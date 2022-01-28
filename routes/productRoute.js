import express from "express";
import authMiddleware from '../middleware/auth.js';
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controller/productController.js";

const router = express.Router();

router.get('/', authMiddleware.isLoggedIn, getAllProducts, (req, res, next) => {
});
router.get('/:id', authMiddleware.isLoggedIn, getProductById, (req, res, next) => {
});
router.post('/', authMiddleware.isLoggedIn, createProduct, (req, res, next) => {
});
router.patch('/:id', authMiddleware.isLoggedIn, updateProduct, (req, res, next) => {
});
router.delete('/:id', authMiddleware.isLoggedIn, deleteProduct, (req, res, next) => {
});

export default router;
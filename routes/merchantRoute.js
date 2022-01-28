import express from "express";
import authMiddleware from '../middleware/auth.js';
import {
    getAllMerchants,
    getMerchantById,
    updateMerchant,
    deleteMerchant
} from "../controller/merchantController.js";

const router = express.Router();

router.get('/', authMiddleware.isLoggedIn, getAllMerchants, (req, res, next) => {
});
router.get('/:id', authMiddleware.isLoggedIn, getMerchantById, (req, res, next) => {
});
router.patch('/:id', authMiddleware.isLoggedIn, updateMerchant, (req, res, next) => {
});
router.delete('/:id', authMiddleware.isLoggedIn, deleteMerchant, (req, res, next) => {
});

export default router;
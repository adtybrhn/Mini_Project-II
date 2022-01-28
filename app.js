import express from "express";
import db from "./config/database.js";
import router from './routes/router.js'
import productRoutes from "./routes/productRoute.js";
import merchantRoutes from "./routes/merchantRoute.js";
import cors from "cors";

const app = express();
try {
    await db.authenticate();
    console.log('Koneksi Berhasil');
} catch (error) {
    console.error('Koneksi Gagal', error);
}

app.use(express.json());
app.use(cors());
app.use('/minipro', router);

app.use ('/minipro/product', productRoutes);
app.use ('/minipro/merchant', merchantRoutes);

app.use((req, res, next) => {
    const err = new Error("Not Found")
    err.status = 404
    next(err)
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error : {
            status: err.status || 500,
            message: err.message
        }
    });
});

app.listen(5000, () => console.log ('server running at port 5000'));
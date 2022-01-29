import products from "../model/modelProduct.js";

export const getAllProducts = async (req, res) => {
    try {
        const product = await products.findAll();
        res.json(product);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await products.findOne({
            where: {
                id: req.params.id
            }
        });

        if (product === null) {
            res.status(404).send({ status: 404, message : "Product Not Found"});
        } else {
            res.json(product);
        }

    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const createProduct = async (req, res) => {
    try {
        await products.create(req.body)
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const product = await products.findOne({
            where: {
                id: req.params.id
            }
        });

        if (product === null) {
            res.status(400).send({ status: 400, message : "Invalid Request"});
        } else {

        await products.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "Product Updated"
        });
    }
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await products.findOne({
            where: {
                id: req.params.id
            }
        });

        if (product === null) {
            res.status(400).send({ status: 400, message : "Invalid Request"});
        } else {

            await products.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.json({
                "message": "Product Deleted"
            });
        }
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

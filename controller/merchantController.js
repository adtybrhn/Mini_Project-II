import merchant from "../model/modelMerchant.js";

export const getAllMerchants = async (req, res) => {
    try {
        const merchants = await merchant.findAll();
        res.json(merchants);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getMerchantById = async (req, res) => {
    try {
        const merchants = await merchant.findOne({
            where: {
                id: req.params.id
            }
        });

        if (merchants === null) {
            res.json({
                "message": "Merchant id Not Found"
            })
        } else {
            res.json(merchants);
        }
    } catch (error) {
        res.json({ 
            message: error.message 
        });
    }
}

export const updateMerchant = async (req, res) => {
    try {
        const merchants = await merchant.findOne({
            where: {
                id: req.params.id
            }
        });

        if (merchants === null) {
            res.status(400).send({ status: 400, message : "Invalid Request"});
        } else {

        await merchant.update(req.body, {
            where : {
                id: req.params.id
            }
        })
        res.json({
            "message": "Merchant Updated"
        });
    }
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteMerchant = async (req, res) => {
    try {
        const merchants = await merchant.findOne({
            where: {
                id: req.params.id
            }
        });

        if (merchants === null) {
            res.status(400).send({ status: 400, message : "Invalid Request"});
        } else {

        await merchant.destroy({
            where : {
                id: req.params.id
            }
        })
        res.json({
            "message": "Merchant has been Deleted"
        });
    }
    } catch (error) {
        res.json({ message: error.message });
    }
}
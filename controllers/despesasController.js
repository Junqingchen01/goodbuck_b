const { validationResult } = require("express-validator");
const { User } = require("../models/user");
const { Despesa } = require("../models/Despesa");
const { Sequelize } = require('sequelize');

//get all despesas
exports.GetUserDespesas = async (req, res) => {
    try {
        const userID = req.params.id;

        const userWithDespesas = await User.findOne({
            where: { UserID: userID },
            attributes: ['UserID', 'Name'], // 仅选择需要返回的字段
            include: {
                model: Despesa,
                attributes: ['DespesaID', 'Date', 'Category', 'Description', 'PaymentMethod'],
            },
        });

        if (!userWithDespesas) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User despesas retrieved successfully",
            user: userWithDespesas,
        });
    } catch (error) {
        console.error("Error getting user despesas:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


//create despesa
exports.createDespesa = async (req, res) => {
    try {
        const userID = req.params.id; 
        const { Category, Description, PaymentMethod } = req.body;

        const user = await User.findOne({
            where: { UserID: userID },
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const newDate = new Date();


        const newDespesa = await Despesa.create({
            UserID: userID,
            Date: newDate,
            Category,
            Description,
            PaymentMethod,

        });

        res.status(201).json({
            message: "Despesa created successfully",
            despesa: newDespesa,
        });
    } catch (error) {
        console.error("Error creating despesa:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


//get despesa by id
exports.getDespesaById = async (req, res) => {
    try {
        const userID = req.params.id;  
        const despesaID = req.params.idDespesa;  

        if (!userID || !despesaID) {
            return res.status(400).json({ message: "User ID and Despesa ID are required" });
        }

        const despesa = await Despesa.findOne({
            where: { UserID: userID, DespesaID: despesaID },
        });

        if (!despesa) {
            return res.status(404).json({ message: "Despesa not exist" });
        }

        res.status(200).json({
            message: "Despesa retrieved successfully",
            despesa: despesa,
        });
    } catch (error) {
        console.error("Error getting despesa:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
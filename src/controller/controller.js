const User = require("../module/module");

exports.create = async (req, res) => {
    try {
        const users = await User.create(req.body);
        res.status(200).send(users);
    } catch (e) {
        console.log(e);
        res.status(400);
    }
};

exports.findAll = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (e) {
        res.status(400);
    }
};

exports.findOne = async (req, res) => {
    const _id = req.body.id;
    try {
        const users = await User.findOne(_id);
        console.log(users);
        res.status(200).send(users);
    } catch (e) {
        res.status(400);
    }
};
exports.update = async (req, res) => {
    const _id = req.params.id;
    try {
        const users = await User.findOneAndUpdate(_id,
            { $set: req.body });
        res.status(200).send(users);
    } catch (e) {
        res.status(200);
    }
};
exports.remove = async (req, res) => {
    const _id = req.params.id;
    try {
        const users = await User.findOneAndDelete(_id);
        res.status(200).send(users);
    } catch (e) {
        res.status(200);
    }
};
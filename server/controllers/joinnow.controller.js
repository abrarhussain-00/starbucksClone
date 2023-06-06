const User = require('../models/joinnow.model');

module.exports.create = (req, res) => {
    User.create(req.body)
        .then(newUser => {
            return res.json(newUser)
        }).catch(err => {
            return res.status(400).json(err)
        })
}

module.exports.getAll = (req, res) => {
    User.find({})
        .then(allUsers => {
            return res.json(allUsers)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.getOne = (req, res) => {
    User.findById({ _id: req.params.id })
        .then(User => {
            return res.json(User)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.deleteOne = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(deletedUser => {
            return res.json(deletedUser)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.updateOne = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true , runValidators: true})
        .then(updatedUser => {
            return res.json(updatedUser)
        })
        .catch(err => {
            return res.status(400).json(err)
        })
}

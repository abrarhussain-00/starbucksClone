const User = require('../models/joinnow.model');

module.exports.create = (req, res) => {
    User.findOne({ email: req.body.email }) // Check if email already exists
        .then((existingUser) => {
            if (existingUser) {
                return res.status(409).json({ message: 'Email taken, please use another email' });
            }

            User.create(req.body)
                .then((newUser) => {
                    return res.json(newUser);
                })
                .catch((err) => {
                    return res.status(400).json(err);
                });
        })
        .catch((err) => {
            return res.status(500).json({ message: 'An error occurred. Please try again later.' });
        });
};

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
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedUser => {
            return res.json(updatedUser)
        })
        .catch(err => {
            return res.status(400).json(err)
        })
}

module.exports.signIn = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
        .then(user => {
            if (!user || user.password !== password) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            return res.json(user);
        })
        .catch(err => {
            return res.status(500).json({ message: 'An error occurred. Please try again later.' });
        });
};

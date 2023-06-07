const User = require('../models/signin.model');

module.exports.signIn = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      // User authentication successful
      return res.json(user);
    })
    .catch(err => {
      return res.status(500).json({ message: 'An error occurred. Please try again later.' });
    });
};

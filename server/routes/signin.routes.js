const signinController = require("../controllers/signin.controller");

module.exports = app => {
  app.post("/api/login/user", signinController.signIn);
};

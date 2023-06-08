const joinnowController = require("../controllers/joinnow.controller")


module.exports = app => {
    app.post("/api/login/users", joinnowController.create),
    app.get("/api/login/users", joinnowController.getAll),
    app.get("/api/one/users/:id", joinnowController.getOne),
    app.delete("/api/login/users/:id", joinnowController.deleteOne),
    app.put("/api/edit/users/:id", joinnowController.updateOne)
    app.post("/api/signin/user", joinnowController.signIn)
}
const joinnowController = require("../controllers/joinnow.controller")


module.exports = app => {
    app.post("/api/login/users", joinnowController.create),
    app.get("/api/login/users", joinnowController.getAll),
    app.get("/api/login/users/:id", joinnowController.getOne),
    app.delete("/api/login/users/:id", joinnowController.deleteOne),
    app.put("/api/login/users/:id", joinnowController.updateOne)
}
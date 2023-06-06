const express = require("express");
const cors = require("cors");
const port = 8000;
const colors = require('colors');
const path = require('path')

require("./config/mogoose.config");
const app = express();

app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));

// require("./routes/joinnow.routes")(app)
// require("./routes/signin.routes")(app)


app.listen(port, () => 
    console.log(colors.bgCyan(`Listening on port ${port} for requests to respond to.`)
));

// JORDAN BELOW

// const express = require('express');
// const cors = require('cors')
// const app = express();
// require('dotenv').config();
// const port = process.env.API_PORT;
// require("./config/mongoose.config")

// app.use(cors())
// app.use(express.json(), express.urlencoded({ extended: true }));
// // Route section
// const AllPetRoutes = require("./routes/pet_shelter.route")
// AllPetRoutes(app);

// app.listen(port, () => console.log(`Listening on port: ${port}`));
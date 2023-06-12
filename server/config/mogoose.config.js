const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://abrar:dvBEXNFcliySsZMq@starbucksclone.gwndlj9.mongodb.net/db01', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

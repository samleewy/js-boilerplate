const mongoose = require('mongoose');
const app = require('./app');

// connect to mongo
mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
  {
    auth: {
      user: process.env.MONGO_USERNAME,
      password: process.env.MONGO_PASSWORD,
    },
    authSource: 'admin',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err) => {
    if (err) throw err;
  });

// run express
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

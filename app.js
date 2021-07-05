const express = require('express');
const mongoose = require('mongoose');
const keys = require('./configs/keys');

require('./models/Article');
require('./utils/redis');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

mongoose.connect(keys.MONGO_URI, { 
  useUnifiedTopology: true,
  useNewUrlParser: true
});

require('./routes/articles')(app);

app.listen(port, () => console.log(`app is listening on port ${port}!`));
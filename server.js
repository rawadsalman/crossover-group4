require('dotenv').config()
const express = require("express");

const cors = require('cors');
const connectDB = require('./dbinit');
const restaurants = require('./api/restaurants');
const cities = require('./api/cities');
const tags = require('./api/tags');


const errorHandler = require('./middleware/error');

const app = express();
const PORT = 2000;

connectDB();

  app.use(cors());


app.use(express.json());
app.use('/restaurants', restaurants);
app.use('/cities', cities);
app.use('/tags', tags);


app.use(errorHandler);

app.listen(PORT, () => console.log(`Started server on port ${PORT}`));


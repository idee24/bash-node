const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require("./config/keys");
const passport = require("passport");

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 1 * 24 * 60 * 60 * 1000,  //one day
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/eventRoutes")(app);
require("./routes/categoriesRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

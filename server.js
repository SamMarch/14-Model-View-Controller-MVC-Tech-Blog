const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const errorHandler = require("./error/errorhandler");
const helpers = require("./utils/displaytime");
const sequelize = require("./config/connection");
const loggedIn = require("./utils/logged-in");

// Create a new sequelize store using the express-session package
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({
  helpers,
});

// Configure and link a session object with the sequelize store
const sess = {
  secret: "Extra secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Add express-session and store as Express.js middleware
app.use(session(sess));
app.use(loggedIn);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

app.use(routes);

app.use(errorHandler);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on port", PORT));
});

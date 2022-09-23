const loggedIn = (req, res, next) => {
  res.locals.loggedIn = !!req.session.user_id;
  next();
};

module.exports = loggedIn;

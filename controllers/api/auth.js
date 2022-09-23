const authRouter = require("express").Router();
const { User } = require("../../model");
const Handlederror = require("../../error/Error");

authRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(Handlederror.badRequest());
  }
  const userData = await User.findOne({ where: { username } });
  if (!userData) {
    return next(Handlederror.invalidCredentials());
  }

  const validPassword = await userData.checkPassword(password);

  if (!validPassword) {
    return next(Handlederror.invalidCredentials());
  }

  req.session.save((err) => {
    if (err) {
      return next(Handlederror.databaseError());
    }
    req.session.user_id = userData.id;
    req.session.logged_in = true;
    return res
      .status(200)
      .json({ user: userData, message: "You are now logged in!" });
  });
});

authRouter.post("/logout", (req, res, next) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204);
    });
  } else {
    next(Handlederror.badRequest());
  }
});

module.exports = authRouter;

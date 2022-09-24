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
    return res
      .status(200)
      .json({ user: userData, message: "You are now logged in!" });
  });
});

authRouter.post("/logout", (req, res, next) => {
  if (req.session.user_id) {
    req.session.destroy(() => {
      res.sendStatus(204);
    });
  } else {
    next(Handlederror.badRequest());
  }
});

authRouter.post("/signup", async (req, res, next) => {
  try {
    const { username, password, first_name, last_name, email } = req.body;
    if ((!username || !password, !first_name, !last_name, !email)) {
      return next(Handlederror.badRequest());
    }
    const userData = await User.create({
      username,
      password,
      first_name,
      last_name,
      email,
    });
    console.log(userData);
    req.session.save((err) => {
      if (err) {
        return next(Handlederror.databaseError());
      }
      req.session.user_id = userData.id;
      return res
        .status(201)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (error) {
    next(error);
  }
});

module.exports = authRouter;

exports.isValid = (req, res, next) => {
  const { name, password, email } = req.body;
  if (name && password && email) next();
  else res.status(401).send('Validation Error');
};

exports.isAuth = (req, res, next) => {
  if (req.session?.user) next();
  else res.redirect('/login');
};

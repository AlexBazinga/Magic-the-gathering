exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.send(err.message);
    res.clearCookie('sid');
    res.redirect('/');
  });
};

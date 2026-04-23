module.exports.authadmin = async (req, res, next) => {
  const user = req.user; //usermiddleware --return req.user

  if (!user || user.role !== "admin") {
    return res.status(401).json({ message: "Access denined" });
  }
  next();
};

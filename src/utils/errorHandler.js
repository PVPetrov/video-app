export default (err, req, res, next) => {
  if (err) {
    console.error("Error: ", err);
    res.send({ Error: err.message });
  }
  next();
};

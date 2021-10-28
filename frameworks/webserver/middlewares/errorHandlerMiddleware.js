const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  const status = err.statusCode || 404;
  return res.status(status).send(err.message || "Opps...Not found!");
};

export default errorHandlerMiddleware;

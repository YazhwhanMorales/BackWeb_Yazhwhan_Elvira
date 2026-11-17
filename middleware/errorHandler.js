export const errorHandler = (err, req, res) => {
  const statusCode = res.estatusCode ? res.estatusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: err.stack,
  });
};

function asyncHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      console.error(err);
      res.status(500).json({
        error:
          err.message || "An error occurred while processing your request.",
      });
    });
  };
}

module.exports = {
  asyncHandler,
};

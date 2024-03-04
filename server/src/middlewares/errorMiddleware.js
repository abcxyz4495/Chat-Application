const errorMiddleware = (err, req, res, next) => {
	err.statusCode ||= 400;
	err.message ||= "Internal Server Error";

	res.status(err.statusCode).json({
		success: false,
		status: err.statusCode,
		message: err.message,
	});
};

module.exports = errorMiddleware;

class ApiError extends Error {
    constructor(
        message = "Something went wrong",
        statusCode,
        errors = [],
        statck = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;

        this.data = null;
        this.success = false;
        this.message = message;

        if (statck) {
            this.statck = statck;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    } 
}

export default ApiError;
exports.SUCCESS = (data = null) => {
    return {
        message: "success",
        result: data
    }
}

exports.BAD_REQUEST = () => {
    return {
        message: "bad request",
        result: null
    }
}
exports.INVALID_PARAM = () => {
    return {
        message: "invalid query param",
        result: null
    }
}
exports.NOT_FOUND = () => {
    return {
        message: "not found",
        result: null
    }
}
exports.INTERNAL_ERROR = () => {
    return {
        message: "internal server error",
        result: null
    }
}
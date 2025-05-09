const CustomAPIError = require('./custom-error')
const {StatusCodes} = require('http-status-codes')

//BadRequestError
class BadRequest extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}
module.exports = BadRequest
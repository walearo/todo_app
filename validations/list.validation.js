const Joi = require('joi')

const listValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(5).required()
    })
    return  schema.validate(data);
}

module.exports = { listValidation }
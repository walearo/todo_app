const Joi = require('joi')

const taskValidation = (data) => {
    const schema = Joi.object({
        description: Joi.string().min(5).required(),
    })
    return  schema.validate(data);
}

module.exports = { taskValidation }
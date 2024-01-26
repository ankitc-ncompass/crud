const Joi = require('joi');

const customerSchema = Joi.object({
    ID: Joi.number().integer().min(1).max(999).required(),
    NAME: Joi.string().min(3).max(50).required(),
    ADDRESS: Joi.string().alphanum().min(3).max(50).required()
}); 


const authorSchema = Joi.object({
    ID: Joi.number().integer().min(1).max(999).required(),
    FIRST_NAME: Joi.string().min(3).max(50).required(),
    LAST_NAME: Joi.string().min(3).max(50).required()
}); 


const bookSchema = Joi.object({
    ID: Joi.number().integer().min(1).max(999).required(),
    NAME: Joi.string().min(3).max(50).required(),
    ISBN: Joi.number().integer().min(10000).max(99999).required(),
    EDITION: Joi.number().integer().min(1).max(10).required()
}); 




const validateTableSchema ={customerValidation: (req, res, next) => {
    const { error, value } = customerSchema.validate(req.body);
    console.log(value);

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message,
        });
    }

    // Attach the validated data to the request object for later use
    req.validatedData = value;
    next();
},

authorValidation:(req, res, next) => {
    const { error, value } = authorSchema.validate(req.body);
    console.log(value);

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message,
        });
    }

    // Attach the validated data to the request object for later use
    req.validatedData = value;
    next();
},

bookValidation: (req, res, next) => {
    const { error, value } = bookSchema.validate(req.body);
    console.log(value);

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message,
        });
    }

    // Attach the validated data to the request object for later use
    req.validatedData = value;
    next();
}
};



module.exports = validateTableSchema;

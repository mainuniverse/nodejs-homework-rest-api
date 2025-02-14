const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      next(error);
    }
    next();
  };
};

module.exports = validation;

// const Joi = require("joi");

// module.exports = {
//   addPostValidation: (req, res, next) => {
//     const schemaValid = Joi.object({
//       name: Joi.string().required(),
//       email: Joi.string()
//         .email({
//           minDomainSegments: 2,
//           tlds: { allow: ["com", "net", "ua"] },
//         })
//         .required(),
//       phone: Joi.string().required(),
//     });

//     const validationResult = schemaValid.validate(req.body);
//     if (validationResult.error) {
//       return res.status(400).json({
//         message: "missing name field",
//         status: validationResult.error.details,
//       });
//     }
//     next();
//   },

//   patchValidation: (req, res, next) => {
//     const schemaValid = Joi.object({
//       name: Joi.string().optional(),
//       email: Joi.string()
//         .email({
//           minDomainSegments: 2,
//           tlds: { allow: ["com", "net"] },
//         })
//         .optional(),
//       phone: Joi.string(),
//     });

//     const validationResult = schemaValid.validate(req.body);
//     if (validationResult.error) {
//       return res.status(404).json({ status: validationResult.error.details });
//     }
//     next();
//   },
// };
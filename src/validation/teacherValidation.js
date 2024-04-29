import Joi from "joi";

export let teacherValidation = Joi.object()
  .keys({
    fullName: Joi.string().required(),
    age: Joi.number().required(),
    isMarried: Joi.boolean().required(),
    subject: Joi.string().required(),
    profileImage: Joi.string(),
  })
  .unknown(false);

let validation = (teacherValidation) => {
  return (req, res, next) => {
    let data = teacherValidation.validate(req.body);
    let error = data.error;

    if (error) {
      res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    } else next();
  };
};

export default validation;

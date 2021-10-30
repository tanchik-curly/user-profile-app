import Joi from "joi";

const authSchema = Joi.object({
  username: Joi.string().min(3).max(40).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{6,}$"))
    .required(),
  dateOfBirth: Joi.date()
    .iso()
    .greater("1920-01-01")
    .required()
    .messages({ "date.format": "Date format is YYYY-MM-DD" }),
  placeOfBirth: Joi.string().min(3),
});

const authValidator = (req, res, next) => {
  const body = req.body;
  const validation = authSchema.validate(body);
  if (!validation.error) {
    next();
  } else {
    validation.error.statusCode = 400;
    next(validation.error);
  }
};

export default authValidator;

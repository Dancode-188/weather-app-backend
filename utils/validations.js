const Joi = require('joi');

const userValidationSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required(),
});

const postValidationSchema = Joi.object({
  title: Joi.string().min(5).max(100).required(),
  content: Joi.string().min(10).required(),
  tags: Joi.array().items(Joi.string()),
});

module.exports = {
  userValidationSchema,
  postValidationSchema,
};

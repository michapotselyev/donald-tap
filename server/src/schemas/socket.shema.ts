import joi from '@hapi/joi';

export const getProgressSchema = joi
  .object({
    userId: joi
      .number()
      .integer()
      .positive()
      .required()
      .messages({
        'number.base': 'User ID must be a number.',
        'number.integer': 'User ID must be an integer.',
        'number.positive': 'User ID must be a positive number.',
        'any.required': 'User ID is required.'
      })
  })
  .options({ presence: 'required' });

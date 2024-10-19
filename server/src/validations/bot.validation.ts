import { body } from 'express-validator';

/**
 * Validation chain method for Telegram bot message validation
 */
export const botMessageValidateChainMethod = [
  body('message_id')
    .exists({ checkFalsy: true })
    .withMessage('Message ID is required')
    .isNumeric()
    .withMessage('Message ID must be a number'),
  body('from')
    .exists({ checkFalsy: true })
    .withMessage('From object is required')
    .isObject()
    .withMessage('From must be an object'),
  body('from.id')
    .exists({ checkFalsy: true })
    .withMessage('From ID is required')
    .isNumeric()
    .withMessage('From ID must be a number'),
  body('from.is_bot')
    .optional()
    .isBoolean()
    .withMessage('is_bot must be a boolean'),
  body('from.first_name')
    .exists({ checkFalsy: true })
    .withMessage('First name is required')
    .isString()
    .withMessage('First name must be a string'),
  body('from.last_name')
    .optional()
    .isString()
    .withMessage('Last name must be a string'),
  body('from.username')
    .optional()
    .isString()
    .withMessage('Username must be a string'),
  body('from.language_code')
    .optional()
    .isString()
    .withMessage('Language code must be a string'),
  body('chat')
    .exists({ checkFalsy: true })
    .withMessage('Chat object is required')
    .isObject()
    .withMessage('Chat must be an object'),
  body('chat.id')
    .exists({ checkFalsy: true })
    .withMessage('Chat ID is required')
    .isNumeric()
    .withMessage('Chat ID must be a number'),
  body('chat.type')
    .exists({ checkFalsy: true })
    .withMessage('Chat type is required')
    .isString()
    .isIn(['private'])
    .withMessage('Chat type must be one of: private'),
  body('chat.first_name')
    .optional()
    .isString()
    .withMessage('First name must be a string'),
  body('chat.last_name')
    .optional()
    .isString()
    .withMessage('Last name must be a string'),
  body('chat.username')
    .optional()
    .isString()
    .withMessage('Username must be a string'),
  body('date')
    .exists({ checkFalsy: true })
    .withMessage('Date is required')
    .isNumeric()
    .withMessage('Date must be a number'),
  body('text')
    .optional()
    .isString()
    .withMessage('Text must be a string'),
  body('entities')
    .optional()
    .isArray()
    .withMessage('Entities must be an array'),
  body('entities.*.offset')
    .exists({ checkFalsy: true })
    .withMessage('Entity offset is required')
    .isNumeric()
    .withMessage('Entity offset must be a number'),
  body('entities.*.length')
    .exists({ checkFalsy: true })
    .withMessage('Entity length is required')
    .isNumeric()
    .withMessage('Entity length must be a number'),
  body('entities.*.type')
    .exists({ checkFalsy: true })
    .withMessage('Entity type is required')
    .isString()
    .isIn([
      'mention', 'hashtag', 'bot_command', 'url', 'email', 
      'bold', 'italic', 'code', 'pre', 'text_link', 'text_mention'
    ])
    .withMessage('Invalid entity type'),
  body('caption')
    .optional()
    .isString()
    .withMessage('Caption must be a string'),
  body('forward_from')
    .optional()
    .isObject()
    .withMessage('Forward from must be an object'),
  body('forward_from.id')
    .optional()
    .isNumeric()
    .withMessage('Forward from ID must be a number'),
  body('forward_from.is_bot')
    .optional()
    .isBoolean()
    .withMessage('is_bot must be a boolean'),
  body('forward_from.first_name')
    .optional()
    .isString()
    .withMessage('First name must be a string'),
  body('forward_from.last_name')
    .optional()
    .isString()
    .withMessage('Last name must be a string'),
  body('forward_from.username')
    .optional()
    .isString()
    .withMessage('Username must be a string'),
  body('reply_to_message')
    .optional(),
  body('photo')
    .optional()
    .isArray()
    .withMessage('Photo must be an array'),
  body('photo.*.file_id')
    .exists({ checkFalsy: true })
    .withMessage('File ID is required')
    .isString()
    .withMessage('File ID must be a string'),
  body('photo.*.width')
    .exists({ checkFalsy: true })
    .withMessage('Width is required')
    .isNumeric()
    .withMessage('Width must be a number'),
  body('photo.*.height')
    .exists({ checkFalsy: true })
    .withMessage('Height is required')
    .isNumeric()
    .withMessage('Height must be a number'),
  body('photo.*.file_size')
    .optional()
    .isNumeric()
    .withMessage('File size must be a number'),
  body('document')
    .optional()
    .isObject()
    .withMessage('Document must be an object'),
  body('document.file_id')
    .exists({ checkFalsy: true })
    .withMessage('File ID is required')
    .isString()
    .withMessage('File ID must be a string'),
  body('document.file_name')
    .optional()
    .isString()
    .withMessage('File name must be a string'),
  body('document.mime_type')
    .optional()
    .isString()
    .withMessage('MIME type must be a string'),
  body('document.file_size')
    .optional()
    .isNumeric()
    .withMessage('File size must be a number'),
  body('video')
    .optional()
    .isObject()
    .withMessage('Video must be an object'),
  body('video.file_id')
    .exists({ checkFalsy: true })
    .withMessage('File ID is required')
    .isString()
    .withMessage('File ID must be a string'),
  body('video.width')
    .exists({ checkFalsy: true })
    .withMessage('Width is required')
    .isNumeric()
    .withMessage('Width must be a number'),
  body('video.height')
    .exists({ checkFalsy: true })
    .withMessage('Height is required')
    .isNumeric()
    .withMessage('Height must be a number'),
  body('video.duration')
    .exists({ checkFalsy: true })
    .withMessage('Duration is required')
    .isNumeric()
    .withMessage('Duration must be a number'),
  body('video.mime_type')
    .optional()
    .isString()
    .withMessage('MIME type must be a string'),
  body('video.file_size')
    .optional()
    .isNumeric()
    .withMessage('File size must be a number'),
  body('voice')
    .optional()
    .isObject()
    .withMessage('Voice must be an object'),
  body('voice.file_id')
    .exists({ checkFalsy: true })
    .withMessage('File ID is required')
    .isString()
    .withMessage('File ID must be a string'),
  body('voice.duration')
    .exists({ checkFalsy: true })
    .withMessage('Duration is required')
    .isNumeric()
    .withMessage('Duration must be a number'),
  body('voice.mime_type')
    .optional()
    .isString()
    .withMessage('MIME type must be a string'),
  body('voice.file_size')
    .optional()
    .isNumeric()
    .withMessage('File size must be a number'),
  body('contact')
    .optional()
    .isObject()
    .withMessage('Contact must be an object'),
  body('contact.phone_number')
    .exists({ checkFalsy: true })
    .withMessage('Phone number is required')
    .isString()
    .withMessage('Phone number must be a string'),
  body('contact.first_name')
    .exists({ checkFalsy: true })
    .withMessage('First name is required')
    .isString()
    .withMessage('First name must be a string'),
  body('contact.last_name')
    .optional()
    .isString()
    .withMessage('Last name must be a string'),
  body('contact.user_id')
    .optional()
    .isNumeric()
    .withMessage('User ID must be a number'),
  body('contact.vcard')
    .optional()
    .isString()
    .withMessage('VCard must be a string'),
  body('location')
    .optional()
    .isObject()
    .withMessage('Location must be an object'),
  body('location.longitude')
    .exists({ checkFalsy: true })
    .withMessage('Longitude is required')
    .isNumeric()
    .withMessage('Longitude must be a number'),
  body('location.latitude')
    .exists({ checkFalsy: true })
    .withMessage('Latitude is required')
    .isNumeric()
    .withMessage('Latitude must be a number'),
  body('poll')
    .optional()
    .isObject()
    .withMessage('Poll must be an object'),
  body('poll.id')
    .exists({ checkFalsy: true })
    .withMessage('Poll ID is required')
    .isString()
    .withMessage('Poll ID must be a string'),
  body('poll.question')
    .exists({ checkFalsy: true })
    .withMessage('Question is required')
    .isString()
    .withMessage('Question must be a string'),
  body('poll.options')
    .exists({ checkFalsy: true })
    .withMessage('Options are required')
    .isArray()
    .withMessage('Options must be an array'),
  body('poll.options.*.text')
    .exists({ checkFalsy: true })
    .withMessage('Option text is required')
    .isString()
    .withMessage('Option text must be a string'),
  body('poll.options.*.voter_count')
    .exists({ checkFalsy: true })
    .withMessage('Voter count is required')
    .isNumeric()
    .withMessage('Voter count must be a number'),
  body('poll.is_anonymous')
    .exists({ checkFalsy: true })
    .withMessage('Poll anonymity must be specified')
    .isBoolean()
    .withMessage('is_anonymous must be a boolean'),
  body('poll.type')
    .exists({ checkFalsy: true })
    .withMessage('Poll type is required')
    .isString()
    .isIn(['regular', 'quiz'])
    .withMessage('Poll type must be one of: regular, quiz'),
  body('poll.allows_multiple_answers')
    .exists({ checkFalsy: true })
    .withMessage('Allows multiple answers must be specified')
    .isBoolean()
    .withMessage('Allows multiple answers must be a boolean'),
];

/**
 * Validation chain method for Telegram bot callback query validation
 */
export const botCallbackValidateChainMethod = [
  body('id')
    .exists({ checkFalsy: true })
    .withMessage('Callback query ID is required')
    .isString()
    .withMessage('Callback query ID must be a string'),
  body('from')
    .exists({ checkFalsy: true })
    .withMessage('From object is required')
    .isObject()
    .withMessage('From must be an object'),
  body('from.id')
    .exists({ checkFalsy: true })
    .withMessage('From ID is required')
    .isNumeric()
    .withMessage('From ID must be a number'),
  body('from.is_bot')
    .optional()
    .isBoolean()
    .withMessage('is_bot must be a boolean'),
  body('from.first_name')
    .optional()
    .isString()
    .withMessage('First name must be a string'),
  body('from.last_name')
    .optional()
    .isString()
    .withMessage('Last name must be a string'),
  body('from.username')
    .optional()
    .isString()
    .withMessage('Username must be a string'),
  body('from.language_code')
    .optional()
    .isString()
    .withMessage('Language code must be a string'),
  body('message')
    .optional()
    .isObject()
    .withMessage('Message must be an object'),
  body('message.message_id')
    .optional()
    .isNumeric()
    .withMessage('Message ID must be a number'),
  body('message.from.id')
    .optional()
    .isNumeric()
    .withMessage('From ID must be a number'),
  body('message.from.is_bot')
    .optional()
    .isBoolean()
    .withMessage('is_bot must be a boolean'),
  body('message.from.first_name')
    .optional()
    .isString()
    .withMessage('First name must be a string'),
  body('message.from.last_name')
    .optional()
    .isString()
    .withMessage('Last name must be a string'),
  body('message.from.username')
    .optional()
    .isString()
    .withMessage('Username must be a string'),
  body('message.chat.id')
    .optional()
    .isNumeric()
    .withMessage('Chat ID is required and must be a number'),
  body('message.chat.type')
    .optional()
    .isString()
    .isIn(['private', 'group', 'supergroup'])
    .withMessage('Chat type must be one of: private, group, supergroup'),
  body('message.chat.title')
    .optional()
    .isString()
    .withMessage('Chat title must be a string'),
  body('message.chat.username')
    .optional()
    .isString()
    .withMessage('Username must be a string'),
  body('message.chat.first_name')
    .optional()
    .isString()
    .withMessage('First name must be a string'),
  body('message.chat.last_name')
    .optional()
    .isString()
    .withMessage('Last name must be a string'),
  body('message.date')
    .optional()
    .isNumeric()
    .withMessage('Date must be a number'),
  body('message.text')
    .optional()
    .isString()
    .withMessage('Text must be a string'),
  body('message.entities')
    .optional()
    .isArray()
    .withMessage('Entities must be an array'),
  body('message.entities.*.offset')
    .exists({ checkFalsy: true })
    .withMessage('Entity offset is required')
    .isNumeric()
    .withMessage('Entity offset must be a number'),
  body('message.entities.*.length')
    .exists({ checkFalsy: true })
    .withMessage('Entity length is required')
    .isNumeric()
    .withMessage('Entity length must be a number'),
  body('message.entities.*.type')
    .exists({ checkFalsy: true })
    .withMessage('Entity type is required')
    .isString()
    .isIn([
      'mention', 'hashtag', 'bot_command', 'url', 'email',
      'bold', 'italic', 'code', 'pre', 'text_link', 'text_mention'
    ])
    .withMessage('Invalid entity type'),
  body('message.reply_markup')
    .optional()
    .isObject()
    .withMessage('Reply markup must be an object'),
  body('message.reply_markup.inline_keyboard')
    .optional()
    .isArray()
    .withMessage('Inline keyboard must be an array'),
  body('message.reply_markup.inline_keyboard.*.*.text')
    .exists({ checkFalsy: true })
    .withMessage('Text is required for inline keyboard button')
    .isString()
    .withMessage('Text must be a string'),
  body('message.reply_markup.inline_keyboard.*.*.callback_data')
    .optional()
    .isString()
    .withMessage('Callback data must be a string'),
  body('message.reply_markup.inline_keyboard.*.*.url')
    .optional()
    .isString()
    .withMessage('URL must be a string'),
  body('inline_message_id')
    .optional()
    .isString()
    .withMessage('Inline message ID must be a string'),
  body('chat_instance')
    .exists({ checkFalsy: true })
    .withMessage('Chat instance is required')
    .isString()
    .withMessage('Chat instance must be a string'),
  body('data')
    .optional()
    .isString()
    .withMessage('Callback query data must be a string'),
  body('game_short_name')
    .optional()
    .isString()
    .withMessage('Game short name must be a string'),
];



const { check } = require('express-validator');
const { handleValidationErrors } = require('./utils');

const id = check('id')
    .notEmpty()
    .isInt({ min: 0 });

const title = check('title')
    .notEmpty()
    .withMessage('Title must not be empty.');

const content = check('content')
    .notEmpty()
    .withMessage('Body must contain text.');

const validateCreate = [
    title,
    content,
    handleValidationErrors,
];

exports.validateCreate = validateCreate;

exports.validateUpdate = [
    id,
    validateCreate,
];

import { body, ValidationChain } from 'express-validator';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

export const createValidator: ValidationChain[] = [
  body('title')
    .isString()
    .withMessage('Title need to be a string')
    .isLength({ min: 1, max: 255 })
    .not()
    .isEmpty()
    .withMessage('Title is required')
    .trim()
    .escape(),

  body('description')
    .isString()
    .withMessage('Description need to be a string')
    .isLength({ min: 1 })
    .trim()
    .escape(),

  body('date')
    .optional()
    .isLength({ min: 1, max: 255 })
    .trim()
    .escape()
    .custom((value: string) => {
      const date = new Date(value);
      return !isNaN(date.getTime());
    }).withMessage('Date need to be a valid date'),

  body('priority')
    .trim()
    .isIn([Priority.low, Priority.normal, Priority.high])
    .withMessage('Priority can be low, normal or high'),

  body('status')
    .trim()
    .isIn([Status.todo, Status.inProgress, Status.complete])
    .withMessage('Status can be todo, inProgress or complete'),
];

export const updateValidator: ValidationChain[] = [

  body('id')
    .optional()
    .isUUID(4)
    .isEmpty()
    .withMessage('Id need to be a valid id')
    .trim()
    .escape()
    .isString()
    .withMessage('Id need to be a string'),

  body('title')
    .optional()
    .isString()
    .withMessage('Title need to be a string')
    .isLength({ min: 1, max: 255 })
    .not()
    .isEmpty()
    .withMessage('Title is required')
    .trim()
    .escape(),

  body('description')
    .optional()
    .isString()
    .withMessage('Description need to be a string')
    .isLength({ min: 1 })
    .trim()
    .escape(),

  body('date')
    .optional()
    .isLength({ min: 1, max: 255 })
    .trim()
    .escape()
    .custom((value: string) => {
      const date = new Date(value);
      return !isNaN(date.getTime());
    }),

  body('priority')
    .optional()
    .trim()
    .isIn([Priority.low, Priority.normal, Priority.high])
    .withMessage('Priority can be low, normal or high'),

  body('status')
    .optional()
    .trim()
    .isIn([Status.todo, Status.inProgress, Status.complete])
    .withMessage('Status can be todo, inProgress or complete'),
];

export const deleteValidator: ValidationChain[] = [
  body('id')
    .optional()
    .isUUID(4)
    .isEmpty()
    .withMessage('Id need to be a valid id')
    .trim()
    .escape()
    .isString()
    .withMessage('Id need to be a string'),
];

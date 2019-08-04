import {check} from 'express-validator/check';
import {transValidation} from '../../language/vi'

let register = [
  check('email',transValidation.email_error)
    .isEmail()
    .trim(),
  check('gender',transValidation.gender_error)
    .isIn(['male', 'female']),
  check('password',transValidation.password_error)
    .isLength({min:8}),
  check('password_confirmation',transValidation.confirm_password_error)
    .custom((value,{req})=>{
      return value === req.body.password;
    })
];
module.exports = {
  register: register  
}


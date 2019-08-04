import {validationResult} from 'express-validator/check';

let loginRegister = (req,res) => {
    return res.render('auth/master')
}

let postRegister = (req,res) => {
  let errArray = [];
  let validationError = validationResult(req);
  if(!validationError.isEmpty()){
    let errors = Object.values(validationError.mapped());
    errors.forEach(item => {
        errArray.push(item.msg);
    });
    return;
  }
  console.log(req.body);

}
module.exports = {
    loginRegister:loginRegister,
    postRegister:postRegister,
};
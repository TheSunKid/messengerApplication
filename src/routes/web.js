import express from "express";
import {home,auth} from './../controllers/index';
import {authValid} from './../validation/index'
let router = express.Router();

/**
 * Init All Router
 * @param app from express module
 */

 let initRoutes = (app) => {
    
    router.get('/',home.getHomePage);
    
    router.get('/login-register',auth.loginRegister)

    router.post("/register",authValid.register,auth.postRegister)

    return app.use('/',router);
 }
 module.exports = initRoutes;  

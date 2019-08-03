import express from "express";
import {home,auth} from './../controllers/index';

let router = express.Router();

/**
 * Init All Router
 * @param app from express module
 */

 let initRoutes = (app) => {
    
    router.get('/',home.getHomePage);
    
    router.get('/login-register',auth.loginRegister)

    return app.use('/',router);
 }
 module.exports = initRoutes;  

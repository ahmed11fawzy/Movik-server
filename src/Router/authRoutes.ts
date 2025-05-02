import { Router } from 'express';
import { regValidation, loginValidation, verificationData, resetPassValidation, forgetPassValidation } from '../Validators/authValidators';
import { createUser ,googleAuthController,loginUser, resetPassword, sendEmail,verifyResetCode } from '../Controller/authController';



const authRoutes = Router();

authRoutes.post('/register', regValidation, createUser)
        .post('/login',loginValidation,loginUser)
        .post('/forgot-password',forgetPassValidation,sendEmail)
        .post('/verify-reset-code',verificationData,verifyResetCode)
        .patch('/reset-password',resetPassValidation,resetPassword)
        .post('/google',googleAuthController)
export default authRoutes;
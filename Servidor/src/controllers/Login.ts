
import {Request, Response } from 'express';
import { generateToken } from '../middlewares';

class Login{
    public async login(req:Request, res:Response):Promise<Response>{
        let {email} = req.body;
        const token = await generateToken({email});
        return res.json({token});
    }
}

export default new Login();
import { Request, Response, NextFunction } from "express";
import { auth } from "../firebaseAdmin";

export interface AuthenticatedRequest extends Request {
  uid?: string;
  email?: string;
}

export const verifyId = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    console.log(req.headers);
    const idToken = req.headers['authorization'];
    console.log(idToken);
    
    if(!idToken)return res.status(401).json({error:'No ID token provided'});
    try{
        const decodedToken = await auth.verifyIdToken(idToken);
        req.uid = decodedToken.uid;// attach user UID to request
        req.email = decodedToken.email;
        next();
    } catch(error){
        console.error(error);
        res.status(403).json({reeor:'Invalid or expired ID token'});
    }
}


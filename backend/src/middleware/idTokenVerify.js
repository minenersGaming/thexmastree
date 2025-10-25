import { auth } from "../firebaseAdmin.js";

export const verifyId = async (req, res, next) => {
    const idToken = req.headers['authorization'];
    if(!idToken)return res.status(401).json({error:'No ID token provided'});
    try{
        const decodedToken = await auth.verifyIdToken(idToken);
        req.uid = decodedToken.uid;// attach user UID to request
        req.email = decodedToken.email;
        next();
    } catch(error){
        console.error(error);
        res.status(403).json({error:'Invalid or expired ID token'});
    }
}
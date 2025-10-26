import { auth } from "../firebaseAdmin.js";

export const verifyId = async (req, res)=>{
    const idToken = req.headers['authorization'];
    if (!idToken) {
        res.status(401).json({ error: "No ID token provided" });
        return false;
    }
    try{
        const decodedToken = await auth.verifyIdToken(idToken);
        req.uid = decodedToken.uid;// attach user UID to request
        req.email = decodedToken.email;
        return true;
    } catch(error){
        console.error(error);
        res.status(403).json({error:'Invalid or expired ID token'});
        return false;
    }
}
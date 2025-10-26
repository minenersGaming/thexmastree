import { db } from "../firebaseAdmin.js";
import { verifyId } from "../middleware/idTokenVerify.js";

export default async function handler(req, res){
    const ok = await verifyId(req, res);
    if (!ok) return;
    
    const email= req.email;
    const idDoc = await db.collection('id').doc(email).get();

    if(!idDoc.exists)return res.json({ user: null, id:null  });
    
    const dataId = idDoc.data()?.ID;
    return res.json({ user: email, id: dataId });
};
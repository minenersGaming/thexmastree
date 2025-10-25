import { Router } from 'express';
import { verifyId } from "../middleware/idTokenVerify.js";
import { db } from '../firebaseAdmin.js';

const userRouter = Router();
userRouter.use(verifyId);

userRouter.get('/check', async( req, res )=>{
    const email= req.email;
    console.log(email);
    
    console.log('checking');
    
    if(!email) return res.status(400).json({error:'Email not found in token'});
    const idDoc = await db.collection('id').doc(email).get();
    if(!idDoc.exists)return res.json({ user: null, id:null  });
    
    const dataId = idDoc.data().ID;
    console.log(dataId);
    return res.json({ user: email, id: dataId });
});

userRouter.post('/createTree', async( req, res )=>{
    const email= req.email; 
    const {bg} = req.body;
    console.log(bg);
    
    if(!email) return res.status(400).json({error:'Email not found in token'});
    const userRef = db.collection('user').doc(); 
    const userId = userRef.id; 
    await userRef.set({
      email: email,                 
      name: email.split("@")[0],     
      background: bg || 0,
      elements: [],
      newData: [1,0]
    });
    const idRef = db.collection('id').doc(email);
    await idRef.set({
          ID: userId
        });
    return res.status(201).json({ message: 'User created', id: userId });
});

export default userRouter;
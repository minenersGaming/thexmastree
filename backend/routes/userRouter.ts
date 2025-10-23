import { Router, Request, Response } from 'express';
import { verifyId, AuthenticatedRequest  } from "../middleware/idTokenVerify";
import { db } from '../firebaseAdmin';

const userRouter = Router();
userRouter.use(verifyId);

userRouter.get('/check', async( req: AuthenticatedRequest, res: Response )=>{
    console.log('checking');
    
    const email= req.email;
    if(!email) return res.status(400).json({eror:'Email not found in token'});
    const userDoc = await db.collection('user').doc(email).get();
    if(!userDoc.exists)return res.json({ user: 'null' });
    return res.json({ user: email });
});

userRouter.get('/login', async( req: AuthenticatedRequest, res: Response )=>{
    console.log('checking');
    
    const email= req.email;
    if(!email) return res.status(400).json({error:'Email not found in token'});
    const userDoc = await db.collection('user').doc(email).get();
    if(!userDoc.exists)return res.json({ redirect: '/create/new' });
    return res.json({ redirect: `/create/id=${email}` });
});

userRouter.get('/createTree', async( req: AuthenticatedRequest, res: Response )=>{
    const email= req.email;
    const {bg} = req.body;
    if(!email) return res.status(400).json({error:'Email not found in token'});
    
    const userRef = db.collection('user').doc(email);
    const userDoc = await userRef.get();
    if(userDoc.exists) return res.status(409).json({error:'user already exist'});
    else{
        const name = email.split("@")[0];
        const userRef = db.collection("user").doc(email);
        await userRef.set({
            name: name,
            background: bg,
            elements: []
        });
        return res.status(201).json({ message: 'User created successfully' });
    }
});

userRouter.get('/tree', async(req: AuthenticatedRequest, res: Response)=>{
    const email = req.email;
    if(!email)return res.status(400).json({error:'Email not found in token'});
    const userDoc = await db.collection('user').doc(email).get();
    const data = userDoc.data();

    //format elements
    const elements = data?.elements || [];
    console.log(elements);
    
    const formattedElements = elements.map((e: string | any) => {
      if (typeof e === 'string') {
        const [page, position, type, sender, ...messageParts] = e.split(',');
        return {
          page: Number(page),
          position: Number(position),
          type: Number(type),
          sender,
          message: messageParts.join(','), // join remaining in case message has commas
        };
      }
      return e; // already object
    });
    return res.json({
      id: userDoc.id,
      name: data?.name || '',
      background: data?.background || 0,
      elements: formattedElements,
    });
});

export default userRouter;
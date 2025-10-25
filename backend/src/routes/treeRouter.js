import { Router } from 'express';
import { db } from '../firebaseAdmin.js';

const treeRouter = Router();

treeRouter.get('/element',async(req,res)=>{
    console.log('getting elements');
    const id = String(req.query.id);
    
    if (!id) return res.status(400).json({ error: 'ID not provided' });
    const userDoc = await db.collection('user').doc(id).get();
    const data = userDoc.data();
        
    if (!userDoc.exists) {
      console.log('docs not exist');
      
      return res.status(404).json({ error: 'Document not found' });
    }

    const elements = data?.elements || [];
    //console.log(elements);
    
    const formattedElements = elements.map(e => {
      if (typeof e === 'string') {
        const [page, position, type, sender, ...messageParts] = e.split(',');
        return {
          page: Number(page),
          position: Number(position),
          type: Number(type),
          sender,
          message: messageParts.join(','),
        };
      }
      return e; 
    });
    return res.json({
      id: userDoc.id,
      name: data?.name || '',
      background: data?.background || 0,
      elements: formattedElements,
    });
});

treeRouter.post('/addElement', async(req,res)=>{
  console.log("adding element");
  
  const id = String(req.query.id);
  console.log(id);
  
  const {type,name,message} = req.body;
  console.log(req.body);
  
  const userDocs = await db.collection('user').doc(id).get();
  if (!userDocs.exists)return res.status(404).json({ error: 'Document not found' });
  const data = userDocs.data();
  let page = data.newData[0];
  let pos = data.newData[1];
  console.log(page,pos);
  
  data.elements = data.elements || [];
  const elementString = `${page},${pos},${type},${name},${message}`;
  data.elements.push(elementString);

  pos += 1;
  if (pos > 8) {
    page += 1;
    pos = 0;
  }
  data.newData[0] = page;
  data.newData[1] = pos;

  await db.collection('user').doc(id).set(data);
  res.status(200).json({ message: 'Element added', element: elementString });
});

export default treeRouter;
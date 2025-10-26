import { db } from "../firebaseAdmin.js";

export default async function handler(req, res) {
  //console.log("adding element");
  const id = String(req.query.id);
  if (!id) return res.status(400).json({ error: "ID not provided" });

  const { type, name, message } = req.body;
  //console.log(req.body);

  const userDocRef = db.collection("user").doc(id);
  const userDoc = await userDocRef.get();

  if (!userDoc.exists) return res.status(404).json({ error: "Document not found" });

  const data = userDoc.data();
  let page = data.newData[0];
  let pos = data.newData[1];

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

  await userDocRef.set(data);

  return res.status(200).json({ message: "Element added", element: elementString });
}

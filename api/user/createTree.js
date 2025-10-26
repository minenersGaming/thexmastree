import { db } from "../firebaseAdmin.js";
import { verifyId } from "../middleware/idTokenVerify.js";

export default async function  handler(req, res) {
    const ok = await verifyId(req, res);
    if(!ok) return;
    const email = req.email;
    if (!email) return res.status(400).json({ error: "Email not found in token" });
    
    const {bg}=req.body;
    const userRef = db.collection("user").doc();
    const userId = userRef.id;
    await userRef.set({
        email,
        name: email.split("@")[0],
        background: bg || 0,
        elements: [],
        newData: [1, 0],
    });
    await db.collection("id").doc(email).set({ ID: userId });
    return res.status(201).json({ message: "User created", id: userId });
}
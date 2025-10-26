import { db } from "../firebaseAdmin.js";
import { verifyId } from "../middleware/idTokenVerify.js";

export default function handler(req, res) {
  (async () => {
    const ok = await verifyId(req, res);
    if (!ok) return;

    const email = req.email;
    const idDoc = await db.collection("id").doc(email).get();

    if (!idDoc.exists) return res.json({ user: null, id: null });

    return res.json({ user: email, id: idDoc.data()?.ID });
  })();
}

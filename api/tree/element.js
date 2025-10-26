import { db } from "../firebaseAdmin.js";

export default async function handler(req, res){
    //console.log("getting element");
    const id = String(req.query.id);
    if (!id) return res.status(400).json({ error: "ID not provided" });

    const userDoc = await db.collection("user").doc(id).get();
    if (!userDoc.exists) return res.status(404).json({ error: "Document not found" });

    const data = userDoc.data();
    const elements = data?.elements || [];

    const formattedElements = elements.map(e => {
        if (typeof e === "string") {
        const [page, position, type, sender, ...messageParts] = e.split(",");
        return {
            page: Number(page),
            position: Number(position),
            type: Number(type),
            sender,
            message: messageParts.join(","),
        };
        }
        return e;
    });
    return res.json({
        id: userDoc.id,
        name: data?.name || "",
        background: data?.background || 0,
        elements: formattedElements,
    });
}
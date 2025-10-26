import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.project_id,
        clientEmail: process.env.client_email,
        privateKey: process.env.private_key?.replace(/\\n/g, "\n"),
    })
});

export const db = admin.firestore();
export const auth = admin.auth();
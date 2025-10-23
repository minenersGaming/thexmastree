import admin from 'firebase-admin';

admin.initializeApp({
    credential: admin.credential.cert('./serviceAccToken.json')
});

export const db = admin.firestore();
export const auth = admin.auth();
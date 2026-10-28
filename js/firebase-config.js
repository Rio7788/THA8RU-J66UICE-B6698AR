// Paste your own Firebase web app values here (Project settings > Your apps).
import{initializeApp}from"https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import{getFirestore}from"https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
export const app=initializeApp({apiKey:"PASTE_API_KEY",authDomain:"PASTE_PROJECT_ID.firebaseapp.com",projectId:"PASTE_PROJECT_ID",appId:"PASTE_APP_ID"});
export const db=getFirestore(app);

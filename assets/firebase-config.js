/*
  THARU Juice Bar — Firebase client configuration
  Replace every PASTE_... value with the values from Firebase Console.
  Firebase's web config is not a password. Firestore Security Rules protect writes.
*/
window.THARU_CONFIG = {
  firebase: {
    apiKey: "PASTE_YOUR_FIREBASE_API_KEY_HERE",
    authDomain: "PASTE_YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "PASTE_YOUR_PROJECT_ID",
    storageBucket: "PASTE_YOUR_PROJECT_ID.firebasestorage.app",
    messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID",
    appId: "PASTE_YOUR_FIREBASE_APP_ID"
  },
  // The UID of the admin user you create in Firebase Authentication.
  // Paste the SAME UID into firestore.rules before publishing.
  adminUid: "PASTE_YOUR_ADMIN_USER_UID_HERE",
  shopWhatsApp: "94789280918",
  mapsUrl: "https://maps.app.goo.gl/sts6Jc5GBXbinUr2A"
};

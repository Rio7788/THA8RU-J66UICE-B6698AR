/* Initializes Firebase only after the project config has been filled in. */
(function () {
  const cfg = window.THARU_CONFIG || {};
  const f = cfg.firebase || {};
  const required = ["apiKey", "authDomain", "projectId", "appId"];
  const ready = required.every((key) => typeof f[key] === "string" && f[key].trim() && !f[key].includes("PASTE_"));
  window.THARU_FIREBASE_READY = false;
  window.THARU_DB = null;
  window.THARU_AUTH = null;
  if (!ready || !window.firebase) return;
  try {
    const app = firebase.apps && firebase.apps.length ? firebase.app() : firebase.initializeApp(f);
    window.THARU_DB = app.firestore();
    window.THARU_AUTH = app.auth();
    window.THARU_FIREBASE_READY = true;
  } catch (error) {
    console.error("Firebase initialization failed:", error);
    window.THARU_FIREBASE_ERROR = error;
  }
})();

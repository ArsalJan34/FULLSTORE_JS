const firebaseConfig = {
  apiKey: "AIzaSyAus_LhA6WhHTliGc4DzBHlEgU0wM_VJhw",
  authDomain: "loginform-887bc.firebaseapp.com",
  projectId: "loginform-887bc",
  storageBucket: "loginform-887bc.firebasestorage.app",
  messagingSenderId: "178270572080",
  appId: "1:178270572080:web:953a0f1a234cc6570127f5"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// optional but good
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

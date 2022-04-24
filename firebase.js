import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "amzn-sofi.firebaseapp.com",
  projectId: "amzn-sofi",
  storageBucket: "amzn-sofi.appspot.com",
  messagingSenderId: "301240187351",
  appId: "1:301240187351:web:cc586310e00020d8df7392"
};

// Initialize Firebase
// export const firebaseApp = initializeApp(firebaseConfig);
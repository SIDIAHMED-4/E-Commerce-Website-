// firebase.jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCLoMYL0SFR_UZOekj2cc25XzRDJQIR2BA",
  authDomain: "e-commerce-website-c5c5b.firebaseapp.com",
  projectId: "e-commerce-website-c5c5b",
  storageBucket: "e-commerce-website-c5c5b.appspot.com",
  messagingSenderId: "235393309487",
  appId: "1:235393309487:web:9d2da596ee15d555721fda",
};

let app;
let auth;
let firestore; // Declare firestore variable

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  firestore = getFirestore(app); // Initialize firestore
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) return;

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { auth, firestore, AuthContext }; // Export firestore along with auth and AuthContext

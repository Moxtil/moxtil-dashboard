"use client";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContext = createContext();
const logOut = () => {
  return signOut(auth);
};
const signIn = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const getCurrentUser = (callback) => {
  if (!auth) {
    console.error("Firebase Auth not initialized!");
    return;
  }

  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (us) => {
      setUser(us);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

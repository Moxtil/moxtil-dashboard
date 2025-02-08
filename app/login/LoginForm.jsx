"use client";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useAuth } from "../Firebase/AuthContext";
import styles from "./page.module.css";
export default function LoginForm() {
  const { signIn } = useAuth();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Login</h2>
        <input type="email" placeholder="Email" className={styles.input} />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        <button className={styles.signInButton}>Sign In</button>
        <p className={styles.forget}>Forgot Your Password ?</p>
        <button className={styles.googleButton} onClick={signIn}>
          <FaGoogle size={20} />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

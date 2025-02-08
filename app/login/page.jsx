"use client";
import { FaGoogle } from "react-icons/fa";
import styles from "./page.module.css";
import { useState } from "react";
import { signIn } from "next-auth/react";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit} className={styles.mainForm}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputs}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputs}
          />
          <button type="submit" className={styles.signButton}>
            Login
          </button>
        </form>
        <div>
          <button
            className={styles.googleButton}
            onClick={() => signIn("google")}
          >
            <FaGoogle size={20} />
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
}

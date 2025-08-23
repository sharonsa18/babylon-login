"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import "../../styles/login.css";

export default function Login() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!isLogin && fullName.length<3) {
      setErrorMsg("Please enter your full name");
      return;
    }
    if (!email.includes("@")) {
      setErrorMsg("Please enter a valid email");
      return;
    }
    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters");
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: fullName });
      }
      router.push("/home");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="card">
  <div className="card-left">
    <h1>{isLogin ? "Login" : "Register"}</h1>
    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {errorMsg && <div className="error-box">{errorMsg}</div>}

      <button type="submit">{isLogin ? "Login" : "Register"}</button>
    </form>
    <p>
      {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
      <button type="button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Register" : "Login"}
      </button>
    </p>
  </div>

  <div className="card-right">
    <img src="/PIC.jpg" alt="Login Visual" />
  </div>
</div>
  )
}

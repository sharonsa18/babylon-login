"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import "../../../styles/login.css"; 

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <div className="container1">
      <div className="card1">
  <div className="card-image">
    <img src="/PIC2.jpg" alt="Welcome" />
  </div>

  <h1>Hi {user?.displayName || "User"}</h1>
  <h2> You’re successfully logged in.</h2>
  <button onClick={handleLogout}>Logout</button>
</div>

    </div>
  );
}

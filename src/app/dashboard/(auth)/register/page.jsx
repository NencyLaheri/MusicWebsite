"use client";
import React, { useContext, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";

const Register = () => {
  const [data, setData] = useState({});

  console.log(data,"all about data -------------------->>>>>>>>>")

  const { toggle, mode } = useContext(ThemeContext);
  const inpuStyle = {
    color: mode == "dark" ? "grey" : "black",
    border: mode == "dark" ? "2px solid #bbb" : "2px solid black",
  };

  const btnStyle = { color: mode == "dark" ? "white" : "black" };

  const handleInputFocus = (event) => {
    event.target.style.borderColor = mode === "dark" ? "white" : "lightgrey";
  };

  const handleInputBlur = (event) => {
    event.target.style.borderColor = mode === "dark" ? "grey" : "black";
  };

  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    // console.log("dataaaaaaaa---->>>", name, email, password);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
          required
          style={inpuStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          name="username"
          onChange={(e)=>{ setData({ ...data, [e.target.name]: e.target.value });}}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          required
          style={inpuStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          name="email"
          onChange={(e)=>{ setData({ ...data, [e.target.name]: e.target.value });}}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          required
          style={inpuStyle}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          name="password"
          onChange={(e)=>{ setData({ ...data, [e.target.name]: e.target.value });}}
        />
        <button className={styles.button} style={btnStyle}>
          Register
        </button>
      </form>
      {err && "Something went Wrong"}
      <Link href="/dashboard/login">Login with exsting account</Link>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "wouter";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form", email, password);
    // handle form submission here
  };

  return (
    <div className="signin-container">
      <div>
        <h1>Sign In</h1>
        <h6>Sign in to practice your interview game</h6>
      </div>
    <div className = "form-container">
      <form onSubmit={handleSubmit}>
      <label>
        <input
          type="email"
          value={email} placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="password"
          value={password} placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <Link to="/problems">
        <button type="submit">Sign in</button>
      </Link>
    </form>
    </div> 
    </div>
    
  );
}


export default SignIn
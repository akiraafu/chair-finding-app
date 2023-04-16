import { useState } from "react";
import Navbar from "../components/Navbar";

import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleFileChange = (e) => {
    setThumbnail(null);
    //only allow 1 file be selected
    let selected = e.target.files[0];
    console.log(selected);
  };

  return (
    <>
      <Navbar />

      <form className="auth-form">
        <h2>Sign up</h2>
        <label>
          <span>Display name:</span>
          <input
            type="text"
            required
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
            value={displayName}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </label>
        <label>
          <span>Profile Photo</span>
          <input type="file" required onChange={handleFileChange} />
        </label>
        <button className="button">Sign up</button>
      </form>
    </>
  );
};

export default Signup;

import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

import "./signup.css";

/**
 * Signup component for user registration
 * @returns {JSX.Element} A form for user signup including fields for display name, email, password, and profile photo
 */
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const { signup, isPending, error } = useSignup();

  /**
   * Handles the form submission for user signup.
   * @param {Event} e - The form submission event.
   * @returns {void} This function doesn't return a value.
   */
  /**
   * Handles file selection and validation for image upload
   * @param {Event} e - The file input change event
   * @returns {void} This function doesn't return a value, but updates state
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    //only allow 1 file be selected
    let selected = e.target.files[0];
    console.log(selected);
    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }

    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }

    if (selected.size > 100000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }
    setThumbnailError(null);
    setThumbnail(selected);
    console.log("thumbnail updated");
  };

  return (
    <div className="xl:h-[calc(100vh-100px)] flex justify-center items-center">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        /**
         * Handles the change event for updating the display name
         * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object
         * @returns {void} This function does not return a value
         */
        <label>
          <span>Display name:</span>
          <input
            type="text"
            required
            onChange={(e) => {
              /**
               * Updates the email state when the input value changes
               * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object
               * @returns {void} This function doesn't return a value
               */
              setDisplayName(e.target.value);
            /**
             * Handles the change event for the password input field
             * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object
             * @returns {void} This function doesn't return a value
             */
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
          <span>Profile Photo &#40;Lower than 100k&#41;</span>
          <input type="file" required onChange={handleFileChange} />
          {thumbnailError && <div className="error">{thumbnailError}</div>}
        </label>
        {!isPending && (
          <button className="text-white text-md px-8 py-2 border-2 rounded-md bg-red-500 hover:border-2 hover:border-red-500 hover:bg-transparent hover:text-red-500 ">
            Sign up
          </button>
        )}
        {isPending && (
          <button
            className="text-white text-md px-8 py-2 border-2 rounded-md bg-red-500 hover:border-2 hover:border-red-500 hover:bg-transparent hover:text-red-500 "
            disabled
          >
            Loading
          </button>
        )}
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;

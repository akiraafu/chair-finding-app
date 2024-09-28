import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

/**
 * Renders a login form component with email and password inputs.
 * @returns {JSX.Element} A div containing the login form with input fields for email and password, submit button, and error display.
 */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
  ```
  /**
   * Handles the form submission for user login.
   * @param {Event} e - The form submission event object.
   * @returns {void} This function doesn't return a value.
   */
  ```  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="xl:h-[calc(100vh-115px)] flex justify-center items-center">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          <span>Email:</span>
          <input
            type="email"
            required
            /**
             * Updates the email state with the value from the input field
             * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object
             * @returns {void} This function does not return a value
             */
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
            /**
             * Updates the password state with the value from the input field
             * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object
             * @returns {void} This function doesn't return a value
             */
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </label>

        {isPending && (
          <button
            className="text-white text-md px-8 py-2 border-2 rounded-md bg-red-500 hover:border-2 hover:border-red-500 hover:bg-transparent hover:text-red-500 "
            disabled
          >
            Loading
          </button>
        )}
        {!isPending && (
          <button className="text-white text-md px-8 py-2 border-2 rounded-md bg-red-500 hover:border-2 hover:border-red-500 hover:bg-transparent hover:text-red-500 ">
            Login
          </button>
        )}

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="h-[calc(100vh-115px)]">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
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

        {isPending && (
          <button
            className="text-white text-md px-8 py-2 border-2 rounded-md bg-amber-500 hover:border-2 hover:border-amber-500 hover:bg-transparent hover:text-amber-500 "
            disabled
          >
            Loading
          </button>
        )}
        {!isPending && (
          <button className="text-white text-md px-8 py-2 border-2 rounded-md bg-amber-500 hover:border-2 hover:border-amber-500 hover:bg-transparent hover:text-amber-500 ">
            Login
          </button>
        )}

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;

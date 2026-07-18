import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

function AdminLogin() {

  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (password === "Manthan@123") {

      localStorage.setItem("admin", "true");

      navigate("/dashboard");

    } else {

      alert("Wrong Password");

    }

  };

  return (

    <div className="login-page">

      <form
        className="login-box"
        onSubmit={handleLogin}
      >

        <h2>Admin Login</h2>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>

  );

}

export default AdminLogin;
import { useState,useEffect, use } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();
  useEffect(() => { 
if (login) {
  navigate("/list");
}   
    }, []);
  const handleSubmit = (e) => {

    e.preventDefault();

    const success = login(username, password);

    if (success) {
      navigate("/list");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow w-80"
      >

        <h2 className="text-2xl font-bold mb-4">
          Employee Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full mb-3"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white w-full p-2 rounded"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
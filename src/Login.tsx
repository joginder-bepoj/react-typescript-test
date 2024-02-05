import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setSuccessMessage("");
    setErrorMessage("");

    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }

    // Simulating login functionality
    if (email !== "" && password !== "") {
      setSuccessMessage("Login successful!");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 " >
      <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-md min-w-96">
        <h2 className="text-3xl font-semibold text-center mb-4">Login</h2>
        {successMessage && <p className="text-green-500 mb-4 text-center">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400"
         
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400"
        
          />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Login</button>
      </form>
    </div>
  );
};

export default Login;

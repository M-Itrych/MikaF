import { Navigate } from "react-router-dom";
import "./Admin.css";
import { useState } from "react";
import axios from "axios";
import config from '../../config.json'

const AdminLogin = () => {
  let [showPassword, setShowPassword] = useState(false);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    sessionStorage.removeItem("token")
    const formData = new FormData(event.target);

    const login = formData.get("login");
    const password = formData.get("password");

    try {
      const response = await axios.post(
        `${config.apiUrl}/api/authenticate`,
        null,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa(login + ":" + password),
          },
        }
      );

      if (response.status === 200) {
        sessionStorage.setItem("token", "Basic " + btoa(login + ":" + password));
        setRedirectToDashboard(true);
      }
    } catch (error) {
      console.error("Error occurred:", error.message);
      alert(error.response.statusText);
    }
  };

  if (redirectToDashboard) {
    return <Navigate to="/admin/dashboard"/>;
  }

  return (
    <>
      <main className="admin-main">
        <form method="POST" onSubmit={handleSubmit}>
          <section>
            <label htmlFor="login">
              <span>Login</span>
              <input type="text" name="login" id="login" />
            </label>
            <label htmlFor="password">
              <span>Hasło</span>
              <button
                type="button"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-rectangle-ellipsis"
                >
                  <rect width="20" height="12" x="2" y="6" rx="2" />
                  <path d="M12 12h.01" />
                  <path d="M17 12h.01" />
                  <path d="M7 12h.01" />
                </svg>
              </button>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
              />
            </label>
          </section>
          <button type="submit" className="submit">
            Zaloguj
          </button>
        </form>
      </main>
    </>
  );
};

export default AdminLogin;

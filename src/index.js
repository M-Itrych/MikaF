import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import News from "./pages/News/News";
import OfferId from "./pages/Offer/OfferId";
import ContactPage from "./pages/Contact/ContactPage";
import About from "./pages/About/About";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminAddNews from "./pages/Admin/AdminAddNews";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import NewsId from "./pages/News/NewsId";
import PrivateRoutes from "./components/Utils/PrivateRoutes";
import AdminModify from "./pages/Admin/AdminModify";
import AdminModifyNews from "./pages/Admin/AdminModifyNews";
import Dostawcy from "./pages/Dostawcy/Dostawcy";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateLoginStatus = (status) => {
    console.log(status)
    setIsLoggedIn(status);
  };

  localStorage.removeItem("token")
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/dostawcy" element={<Dostawcy />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/offer/:id" element={<OfferId />} />
        <Route path="/news/:id" element={<NewsId />} />
        <Route
          path="/admin"
          element={<AdminLogin updateLoginStatus={updateLoginStatus} />}
        />
        <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />
          <Route
            path="/admin/dashboard/add_news"
            element={<AdminAddNews />}
          />
          <Route
            path="/admin/dashboard/modify_news"
            element={<AdminModify />}
          />
          <Route
            path="/admin/dashboard/modify_news/:id"
            element={<AdminModifyNews />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

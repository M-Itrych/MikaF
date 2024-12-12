import AdminGoTo from "./AdminGoTo";
import React from "react";

const AdminDashboard = () => {
  return (
    <main className="admin-main">
      <div className="admin-dashboard-grid">
        <AdminGoTo
          path={"/Admin/dashboard/add_news"}
          text={"Dodawanie Aktualności"}
        />
        <AdminGoTo path={"/Admin/dashboard/modify_news"} text={"Edycja Aktualności"} />
      </div>
    </main>
  );
};

export default AdminDashboard;

import { useNavigate } from "react-router-dom";
import React from "react";

const AdminGoTo = ({path, text}) => {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate(path);
  };
  return <button onClick={goToBack} className="dd-goBackBtn">{!text ? "Powrót" : text}</button>;
};

export default AdminGoTo;
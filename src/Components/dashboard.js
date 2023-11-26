import React from "react";
import { useUserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div>
      <h1>Dashboard </h1>
     <p>Transform your financial management using Notion's Personal Finance Tracker template, empowered by Database Automations. Whenever you input new income or expenses, the system automatically updates the date, helping you maintain an accurate financial journal.</p>
      <button onClick={logoutUser}>Log out</button>
    </div>
  );
};

export default Dashboard;
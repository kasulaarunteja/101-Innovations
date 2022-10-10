import React from "react";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="head-container" onClick={() => navigate("/")}>
      <h2 className="head-title">TheFoodList</h2>
    </div>
  );
}

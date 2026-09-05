import React from "react";
import TopBar from "../ui/TopBar";
import Navbar from "../ui/Navbar";

export default function Header() {
  return (
    <header id="header" className="w-full">
      <TopBar />
      <Navbar />
    </header>
  );
}

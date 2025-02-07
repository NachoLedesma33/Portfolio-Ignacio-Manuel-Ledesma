"use client";

import { useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Content from "@/app/Components/Content";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("Inicio");

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-black via-red-900 to-black">
      <Navbar setActiveTab={setActiveTab} />
      <Content activeTab={activeTab} />
    </div>
  );
}
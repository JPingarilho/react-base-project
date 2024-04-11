
import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Buscador from "./pages/Buscador";
import Calibragem from "./pages/Calibragem";
import DownloadPacientes from "./pages/DownloadPacientes";
import Relatorio from "./pages/Relatorio";

const container = document.getElementById("root");
const root = createRoot(container);

onAuthStateChanged(auth, (user)=> {
  if (user) {
    window.sessionStorage.setItem("accessToken", user.accessToken);
  } else {
    window.sessionStorage.removeItem("accessToken");
  }
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/buscador" element={<Buscador/>} />
        <Route path="/calibragem" element={<Calibragem/>} />
        <Route path="/downloadpacientes" element={<DownloadPacientes/>} />
        <Route path="/relatorio" element={<Relatorio/>} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

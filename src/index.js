
import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import {HashRouter, Route, Routes } from "react-router-dom";
import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Buscador from "./pages/Buscador";
import Calibragem from "./pages/Calibragem";
import DownloadPacientes from "./pages/DownloadPacientes";
import Relatorio from "./components/Relatorios/relatorio";
import RelatorioPage from "./pages/RelatorioPage";

const container = document.getElementById("root");
const root = createRoot(container);

//onAuthStateChanged(auth, (user)=> {
//  if (user) {
//    window.sessionStorage.setItem("accessToken", user.accessToken);
//  } else {
//    window.sessionStorage.removeItem("accessToken");
//  }
//});

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/buscador" element={<Buscador/>} />
        <Route path="/calibragem" element={<Calibragem/>} />
        <Route path="/downloadpacientes" element={<DownloadPacientes/>} />
        <Route path="/relatorio" element={<RelatorioPage/>} />
        
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

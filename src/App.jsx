import React from "react"
import { CssBaseline } from "@mui/material"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./screens/Layout"
import Home from "./screens/Home"

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

import React from "react"
import { CssBaseline } from "@mui/material"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./screens/Home"
import Details from "./screens/Details"

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
          <Route path="/" element={<Navigate to="/home" replace /> } />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

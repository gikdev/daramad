import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import "./styles.css"
import Index from "./pages/home"

const container = document.getElementById("root")
if (!container) throw new Error("No #root found!")
const root = createRoot(container)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

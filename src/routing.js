import { Route, Routes } from "react-router-dom";
import {Donation  } from "./pages/donation";
import {Home  } from "./pages/home";
export function Routing() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import Home from "./pages/Home";
import CurrencyConverter from "./pages/CurrencyConverter";
import ConversionHistory from "./pages/ConversionHistory";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/conversor" element={<CurrencyConverter />} />
          <Route path="/historico" element={<ConversionHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
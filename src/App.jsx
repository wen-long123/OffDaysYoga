import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { Navbar } from "./components/Navbar";
import { Guidesflows } from "./components/Guidesflows";
import { Getyourflow } from "./Pages/Getyourflow";
import { SpecialFlows } from "./components/Specialflows";
import { Footer } from "./components/Footer";
import { ContactBtn } from "./components/ContactBtn";
import { ContactPage } from "./components/ContactPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ContactBtn />
      <Toaster />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/guides-flows" element={<Guidesflows />} />
        <Route path="/getyourflow" element={<Getyourflow />} />
        <Route path="/specialflows" element={<SpecialFlows />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

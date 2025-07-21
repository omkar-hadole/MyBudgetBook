import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import TrustedBy from "./components/TrustedBy";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import SpendingSection from "./components/SpendingSection";
import FAQSection from "./components/FAQSection";
import StatsSection from "./components/StatsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

const AppContent = () => {
  const location = useLocation();
  const isDownloadPage = location.pathname === "/download";

  return (
    <>
      {!isDownloadPage && (
        <div className="bg-horizontal-lines">
          <NavBar />
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <TrustedBy />
              <FeaturesSection />
              <SpendingSection />
              <FAQSection />
              <StatsSection />
            </>
          }
        />
        <Route path="/download" element={<Index />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isDownloadPage && <FooterSection />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

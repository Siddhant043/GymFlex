import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import OnBoarding from "./components/OnBoardingScreen";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <Navbar />
      <OnBoarding />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

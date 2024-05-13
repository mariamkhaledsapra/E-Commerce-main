import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/";
import About from "./pages/About";
import Coatings from "./pages/Coatings";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import Signpage from "./components/Register/Sign";
import Loginpage from "./components/Register/login";
import NewCompany from "./components/Register/NewCompany";
import ForgotPassword from "./components/Register/ForgotPassword";
import PersonalPage from "./pages/PersonalPage";
//import { Form } from "react-bootstrap/lib/Navbar";
const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Coatings" element={<Coatings />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/Sign" element={<Signpage />} />
          <Route path="/NewCompany" element={<NewCompany />} />
          <Route path="/PersonalPage" element={<PersonalPage />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          {/* <Route path="/sections" element={<sections />}/>  */}
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  );
};

export default App;

import "./App.css";
import AdCopy from "./pages/AdCopy";
import Home from "./pages/Home";
import MarketingCopy from "./pages/MarketingCopy";
import OurWork from "./pages/OurWork";
import SalesCopy from "./pages/SalesCopy";
import ProductCopy from "./pages/ProductCopy";
import ContactUs from "./pages/ContactUs";
import AboutPage from "./pages/AboutUs";
import Services from "./pages/Services";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="w-full h-full overflow-x-hidden flex flex-col mx-auto">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/ourwork" element={<OurWork />} />
      </Routes>
      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>
      <Routes>
        <Route path="/aboutus" element={<AboutPage />} />
      </Routes>
      <Routes>
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Routes>
        <Route path="/adcopy" element={<AdCopy />} />
      </Routes>
      <Routes>
        <Route path="/marketingcopy" element={<MarketingCopy />} />
      </Routes>
      <Routes>
        <Route path="/salescopy" element={<SalesCopy />} />
      </Routes>
      <Routes>
        <Route path="/productcopy" element={<ProductCopy />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

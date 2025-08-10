import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/SignupPage";
import About from "./landing_page/about/AboutPage";
import Product from "./landing_page/products/ProductPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";

import Home from "./dashboard_page/Home";

//Wrapper component to make sure it renders Navbar and footer based on conditional.
function AppRoutes() {
  const location = useLocation();

  // Check if the route starts with "/dashboard, /orders, ...."
  const hiddenLayoutPaths = [
    "/dashboard",
    "/orders",
    "/holdings",
    "/positions",
    "/bids",
    "/funds",
  ];

  //Check if current path matches any of the above
  const hideLayout = hiddenLayoutPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        /* Landing pages */
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        /* Dashboard pages */
        <Route path="/dashboard" element={<Home />} />
        /* Not found */
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

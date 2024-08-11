import { OrderContextProvider } from "./context/OrderContext";
import ScrollToTop from "./scroll-setting/ScorollSetting";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import Order from "./pages/Order";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <OrderContextProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </OrderContextProvider>
    </>
  );
}

export default App;

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Features from "./pages/features/Features";
import Pricing from "./pages/pricing/Pricing";
import Home from "./pages/home/Home";
import Stories from "./pages/stories/Stories";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/stories" element={<Stories />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

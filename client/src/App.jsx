import "./App.css";
import Home from "./pages/Home/Home";
import Degrees from "./pages/Degrees/Degrees";
import Header from "./components/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseInfor from "./pages/CourseInfor/CourseInfor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/degrees" element={<Degrees />} />
          <Route exact path="/about_us" element={<About />} />
          <Route exact path="/contact_us" element={<Contact />} />
          <Route exact path="/courseInfor" element={<CourseInfor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

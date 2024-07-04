import "./App.css";
import Home from "./pages/Home/Home";
import Degrees from "./pages/Degrees/Degrees";
import Header from "./components/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseInfor from "./pages/CourseInfor/CourseInfor";
import Login from "./pages/Sign_in/Sign_in";
import Sign_up from "./pages/Sign_in/Sign_up";
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
<<<<<<< HEAD
=======
          <Route exact path="/sign_in" element={<Login />} />
          <Route exact path="/sign_up" element={<Sign_up />} />
>>>>>>> a156704edc967506f158881428085e0488b8c912
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

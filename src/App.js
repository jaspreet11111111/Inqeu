import { Route, Link } from "react-router-dom";
import { Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Post from "./components/Post/post";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
function App () {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/post" element={<Post />} />
        </Routes>
        <Routes>
          <Route path="/signin" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Link } from "react-router-dom";
import { Routes } from 'react-router-dom';
import { useEffect } from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Post from "./components/Post/post";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Singup/Signup";
import { getPosts } from "./actions/posts";
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App () {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
        <ToastContainer />
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
          <Route path="/auth" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Link } from "react-router-dom";
import { Routes, useLocation } from 'react-router-dom';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Post from "./components/Post/post";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Singup/Signup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLayoutEffect } from 'react';
import EmailVerification from "./components/EmailVerification/EmailVerification";
import ResetPasswordForm from "./components/ResetForm";
import Admin from "./components/AdminPannel/Admin";
import AdminLogin from "./components/AdminPannel/AdminLogin";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [location.pathname]);
  return children
}
function App () {
  return (
    <Wrapper>
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
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Routes>
            <Route path="/signin" element={<Signin />} />
          </Routes>
          <Routes>
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Routes>
            <Route path='/verify' element={<EmailVerification />} />
          </Routes>
          <Routes>
            <Route path="/resetPassword" element={<ResetPasswordForm />} />
          </Routes>
          <Routes>
            <Route path="/search/:keyword" element={<Post />} />
          </Routes>
          <Routes>
            <Route path='/adminLogin' element={<AdminLogin />} />
          </Routes>
          <Routes>
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Wrapper>
  );
}

export default App;

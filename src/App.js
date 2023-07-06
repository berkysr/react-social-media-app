import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="863241284462-dgoi5hg4g19rmlltglij8dlinbe8kkav.apps.googleusercontent.com">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </GoogleOAuthProvider>
      ;
    </>
  );
}

export default App;

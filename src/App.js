import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<Login />} />
       </Routes>
    </>
  )
}

export default App;

import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
       </Routes>
    </>
  )
}

export default App;


import './App.css'
import CodeVerification from './Components/Code';
import Dashboard from './Page/dashboard';
import WellsFargoLogin from './Page/Login';
// import AuthPage from './Page/Login';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<WellsFargoLogin />} />
      
        <Route path="/" element={<CodeVerification />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './views/Home/Home';
import LoginForm from './views/Login/LoginForm';

function AllRoutes () {
  return (
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginForm/>}/>
      </Routes>
  );
}

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
    </Router>
  );
}

export default App;

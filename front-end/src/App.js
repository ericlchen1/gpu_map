import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './views/Home/Home';
import LoginForm from './views/Login/LoginForm';
import Contribute from './views/Contribute/Contribute';

function AllRoutes () {
  return (
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/contribute' element={<Contribute/>}/>
      </Routes>
  );
}

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
      <Footer></Footer>
    </Router>
  );
}

export default App;

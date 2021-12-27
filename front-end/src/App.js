import logo from './logo.svg';
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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="bg-info">
      <Outlet/>
    </div>
  );
}

export default App;

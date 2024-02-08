import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Login from './Components/Login';
// import Logout from './Components/Logout';
import { Navbar } from './Components/Navbar';
import { Admin } from './Components/Admin';
import { User } from './Components/User';
import Login from './Components/Login';
import { Registration } from './Components/Registration';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Admin />}/>
      <Route path='/user' element={<User />}/>
    </Routes>
    <Login />
    <Registration />
    </div>
  );
}

export default App;

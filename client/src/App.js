
import "./App.css"
import Vote from "./components/User/Pages/Vote";
import { Route, Routes } from "react-router-dom";
// import UserLogin from "./components/UserLogin";
import {userNav} from './components/User/Header/userNav'
// import Cookies from 'js-cookies';
import Navbar from "./components/Atoms/Header/Navbar";
import Sidebar from "./components/Admin/Header/Pages/Sidebar";
import Election from "./components/Admin/Header/Pages/Election";
import Party from "./components/Admin/Header/Pages/Party";
import Connection from "./components/Admin/Pages/Connection";
import Cookies from "js-cookie";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import AdminHome from "./Components/Admin/Header/Pages/AdminHome";
import UserHome from "./Components/User/Pages/UserHome";

function App() {
  const role = Cookies.get("Role")
  // const role = ""
// const role =""
   if (!role || role === "") {
     console.log("hello");
     return (
       <Routes>
         <Route path="/" element={<UserLogin />} />
         <Route path="*" element={<UserLogin />} />
         <Route path="/admin" element={<AdminLogin />} />
       </Routes>
     );
   } else if (role === "admin") {
     return (
       <div className="admin-app">
         <Sidebar />
         <Routes>
           <Route path="/" exact element={<AdminHome />}></Route>
           <Route
             path="/Election"
             exact
             element={<Election />}
           ></Route>
           <Route path="/Party" exact element={<Party />}></Route>
           <Route
             path="/PartyConnection"
             exact
             element={<Connection />}
           ></Route>
           {/* <Route path="/:id" element={<Result />}></Route> */}
         </Routes>
       </div>
     );
   } else if (role === "user") {
     return (
       <div className="user-app">
         <Navbar data={userNav} />
         <Routes>
           <Route path="/" element={<UserHome />} />
           <Route path="/vote" element={<Vote />} />
           {/* <Route path="/profile" element={<UserProfile />} /> */}
         </Routes>
       </div>
     );
   }
}

export default App;

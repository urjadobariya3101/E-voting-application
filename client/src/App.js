import "./App.css";
import Vote from "./Components/User/Pages/Vote";
import { Route, Routes } from "react-router-dom";
// import UserLogin from "./Components/UserLogin";
import { userNav } from "./Components/User/Header/userNav";
// import Cookies from 'js-cookies';
import Navbar from "./Components/Atoms/Header/Navbar";
import Sidebar from "./Components/Admin/Pages/Sidebar";
import Election from "./Components/Admin/Pages/Election";
import Party from "./Components/Admin/Pages/Party";
import Connection from "./Components/Admin/Pages/Connection";
import Cookies from "js-cookie";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import AdminHome from "./Components/Admin/Pages/AdminHome";
import UserHome from "./Components/User/Pages/UserHome";

function App() {
  const role = Cookies.get("Role");
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
          <Route path="/Election" exact element={<Election />}></Route>
          <Route path="/Party" exact element={<Party />}></Route>
          <Route path="/PartyConnection" exact element={<Connection />}></Route>
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

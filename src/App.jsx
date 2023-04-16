import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Item from "./pages/Item";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/item/:id" element={<Item />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/redirect" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*pages

- homepage
- login
- signup
- create
- item (item details) 

*/

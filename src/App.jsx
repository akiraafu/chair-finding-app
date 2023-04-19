import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Item from "./pages/item/Item";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

//styles
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <div className="flex flex-col items-center justify-between container px-10 pb-6 mx-auto bg-gray-200 rounded-xl shadow border ">
            <SearchBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/create"
                element={user ? <Create /> : <Navigate to="/login" />}
              />
              <Route path="/items/:id" element={<Item />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
              <Route path="/redirect" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
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

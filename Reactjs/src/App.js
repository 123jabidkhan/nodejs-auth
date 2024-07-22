import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
          
          {/* private routes */}
          <Route path='/private' element={<PrivateRoute/>} > 
             <Route path="home" element={<Home />} /> {/* localhost:5001  */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

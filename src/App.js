import Home from "./screens/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Register from "./screens/register/Register";
import Watch from "./screens/watch/Watch";
import Login from "./screens/login/Login";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
              <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path={"login"} element={<Login />} />
            <Route path={"register"} element={<Register />} />
              <Route path={"watch"} element={<ProtectedRoute><Watch /></ProtectedRoute>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

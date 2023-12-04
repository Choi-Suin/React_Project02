import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Profile from "pages/Profile";
import PrivateRoute from "shared/PrivateRoute";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />

        {/* 위에 지정한 경로 외 경로로 접근하는 경우, Home 화면으로 이동 */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

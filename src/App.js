import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { SignIn } from "./pages/signup-signin/SignIn";
import { SignUp } from "./pages/signup-signin/SignUp";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Profile } from "./pages/profile/Profile";
import { ToastContainer } from "react-toastify";
import { Books } from "./pages/book/Books";
import { Clients } from "./pages/clients/Clients";
import { History } from "./pages/history/History";
import { NewBook } from "./pages/book/NewBook";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="clients" element={<Clients />} />
          <Route path="profile" element={<Profile />} />
          <Route path="books" element={<Books />} />
          <Route path="newBook" element={<NewBook />} />
          <Route path="history" element={<History />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;

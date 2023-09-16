import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import LandingPage from "./pages/LandingPage";
import JobDetails from "./pages/JobDetails";
import ApplicationForm from "./pages/ApplicationForm";
import SuccessPage from "./pages/SuccessPage";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />

        {/* Protected routes */}

        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<LandingPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/job/:jobId" element={<JobDetails />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/apply" element={<ApplicationForm />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/application-success" element={<SuccessPage />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

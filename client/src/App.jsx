import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard"
           element={
          //  <ProtectedRoute>
              <Dashboard />
              // </ProtectedRoute>
           }
        />

        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
export default App;

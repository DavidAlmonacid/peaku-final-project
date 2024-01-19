import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;

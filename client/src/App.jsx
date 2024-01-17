import { Route, Routes } from "react-router-dom";
import SplashLayout from "./layouts/SplashLayout";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashLayout />}>
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;

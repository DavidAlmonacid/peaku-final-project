import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { AppLayout } from "./layouts/AppLayout";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;

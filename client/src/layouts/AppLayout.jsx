import { Outlet } from "react-router-dom";
import { Header } from "../components/Header.jsx";

export function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="flex-auto">
        <Outlet />
      </main>
    </div>
  );
}

import { ComponentProvider } from "./components/Contaxt/ComponentProvider";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ComponentProvider>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </ComponentProvider>
  );
}

export default App;

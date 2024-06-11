import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow">
        <div className="container mx-auto flex justify-center items-center h-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

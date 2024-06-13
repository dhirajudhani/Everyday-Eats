import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Body from "./components/Body";

function App() {
  return (
    <div className="">
      <Header />
      {/* Apply styles to position Outlet below Header */}
      <div className=" flex flex-grow  mt-36 mb-4 w-full">
        <div className="container mx-auto flex justify-center items-center">
          <Outlet />
          
        </div>
      </div>
      <div className=" flex flex-grow  w-full">
        <div className="container mx-auto flex justify-center items-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

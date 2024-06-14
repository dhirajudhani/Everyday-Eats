import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Body from "./components/Body";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={30}
        containerClassName="notification-container"
        toastOptions={{
          className: "notification-toast",
          duration: 1500,
        }}
      />
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

import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./sections/Navbar/Navbar";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Navbar isMobile={isMobile} />
    </div>
  );
}

export default App;

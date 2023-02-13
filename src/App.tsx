import { useEffect, useState } from "react";
import "./App.css";
import { Main } from "./sections/Main/Main";
import { Navbar } from "./stories/Navbar/Navbar";
import data from "./utils/data.json";

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [linkSelected, setLinkSelected] = useState<null | number>(null);

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
    <>
      <Navbar
        isMobile={isMobile}
        linkSelected={linkSelected}
        setLinkSelected={setLinkSelected}
        data={data}
      />
      <Main />
    </>
  );
}

export default App;

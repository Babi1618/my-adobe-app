import { useEffect, useState } from "react";
import "./App.css";
import { Main } from "./sections/Main/Main";
import { Modal } from "./sections/Modal/Modal";
import { Navbar } from "./stories/Navbar/Navbar";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [linkSelected, setLinkSelected] = useState(null);

  const array = [1, 2, 3, 4];
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
      <Navbar
        isMobile={isMobile}
        linkSelected={linkSelected}
        setLinkSelected={setLinkSelected}
      />
      <Main />
      {linkSelected && <Modal />}
    </div>
  );
}

export default App;

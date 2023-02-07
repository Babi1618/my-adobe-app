import { useState } from "react";
import "./navlink.css";

export const Navlink = ({ text, onClick, arrowLeft }: NavlinkProps) => {
  const [arrowDown, setArrowDown] = useState(true);

  const handleClick = () => {
    onClick();
    setArrowDown((prev) => !prev);
  };

  return (
    <div className="navlink-container" onClick={handleClick}>
      <div>{text}</div>
      {arrowLeft && (
        <div className={`arrow ${arrowDown && "arrow-down"}`}></div>
      )}
    </div>
  );
};

interface NavlinkProps {
  text: string;
  onClick: any;
  arrowLeft?: boolean;
}

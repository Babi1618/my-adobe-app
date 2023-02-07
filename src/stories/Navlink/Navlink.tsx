import { useState } from "react";
import "./navlink.css";

export const Navlink = ({
  text,
  arrowLeft,
  setLinkSelected,
}: NavlinkProps) => {
  const [arrowDown, setArrowDown] = useState(true);

  const handleClick = () => {
    setLinkSelected((prev: any) => (!prev ? text : null));
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
  onClick?: any;
  arrowLeft?: boolean;
  setLinkSelected?: any;
}

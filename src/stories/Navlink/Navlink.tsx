import { useEffect, useState } from "react";
import "./navlink.css";

export const Navlink = ({
  id,
  text,
  arrowLeft,
  linkSelected,
  setLinkSelected,
  onClick,
}: NavlinkProps) => {
  const [arrowDown, setArrowDown] = useState(true);
  console.log(linkSelected);
  const handleClick = () => {
    if (id) {
      setLinkSelected && setLinkSelected((prev: any) => (!prev ? id : null));
      setArrowDown((prev) => !prev);
    } else onClick();
  };
  
  // useEffect(() => {
  //   console.log(id, linkSelected)
  // }, [id, linkSelected]);
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
  id?: number;
  text: string;
  onClick?: any;
  arrowLeft?: boolean;
  setLinkSelected?: any;
  linkSelected?: null | number;
}

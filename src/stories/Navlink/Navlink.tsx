import { Dispatch, SetStateAction } from "react";
import "./navlink.css";

export const Navlink = ({
  id = null,
  text,
  arrowLeft,
  linkSelected,
  setLinkSelected = null,
  onClick,
}: NavlinkProps) => {
  
  const handleClick = (
    id: number | null,
    setLinkSelected: Dispatch<SetStateAction<null | number>>
  ) => {
    setLinkSelected &&
      setLinkSelected((prev: null | number) =>
        prev ? (prev === id ? null : id) : id
      );
  };

  return (
    <div
      className="navlink-container"
      onClick={
        setLinkSelected !== null
          ? () => handleClick(id, setLinkSelected)
          : onClick
      }
    >
      <div>{text}</div>
      {arrowLeft && (
        <div className={`arrow ${id === linkSelected && "arrow-down"}`}></div>
      )}
    </div>
  );
};

interface NavlinkProps {
  id?: number | null;
  text: string;
  onClick?: any;
  arrowLeft?: boolean;
  setLinkSelected?: Dispatch<SetStateAction<null | number>> | null;
  linkSelected?: null | number;
}

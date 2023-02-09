import "./navlink.css";

export const Navlink = ({
  id,
  text,
  arrowLeft,
  linkSelected,
  setLinkSelected,
  onClick,
}: NavlinkProps) => {

  const handleClick = () => {
    if (id) {
      setLinkSelected &&
        setLinkSelected((prev: any) => (prev ? (prev === id ? null : id) : id));
    } else onClick();
  };

  return (
    <div className="navlink-container" onClick={handleClick}>
      <div>{text}</div>
      {arrowLeft && (
        <div className={`arrow ${id === linkSelected && "arrow-down"}`}></div>
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

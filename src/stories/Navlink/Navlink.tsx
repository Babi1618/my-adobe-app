import "./navlink.css";

export const Navlink = ({
  id = null,
  text,
  arrowLeft,
  linkSelected,
  setLinkSelected,
  onClick,
}: NavlinkProps) => {
  const handleClick = (id: number | null, setLinkSelected: any) => {
    setLinkSelected &&
      setLinkSelected((prev: any) => (prev ? (prev === id ? null : id) : id));
  };

  return (
    <div
      className="navlink-container"
      onClick={id !== null ? () => handleClick(id, setLinkSelected) : onClick}
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
  setLinkSelected?: any;
  linkSelected?: null | number;
}

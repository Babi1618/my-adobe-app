import { SearchIcon } from "../../icons/SearchIcon";
import { Modal } from "../../sections/Modal/Modal";
import { Navlink } from "../Navlink/Navlink";
import { NavlinkArrowLeft } from "../Navlink/Navlink.stories";
import "./navbar.css";

export const Navbar = ({
  isMobile,
  linkSelected,
  setLinkSelected,
  data,
}: any) => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-left-container">
          {isMobile && <div className="navbar-toggler">TODO</div>}
          <div className="navbar-toggler"></div>
          <div className="navlink-container navbar-image">
            <img
              src="https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg"
              alt="Adode, Inc."
            />
            <div>Adobe</div>
          </div>
          {!isMobile && (
            <>
              <NavlinkArrowLeft
                id={1}
                text="Creativity"
                setLinkSelected={setLinkSelected}
                arrowLeft
              />
              <NavlinkArrowLeft
                id={2}
                text="PDF & E-Signature"
                setLinkSelected={setLinkSelected}
                arrowLeft
              />
              <NavlinkArrowLeft
                id={3}
                text="Marketing & Commerce"
                setLinkSelected={setLinkSelected}
                arrowLeft
              />
              <NavlinkArrowLeft
                id={4}
                text="Help & Support"
                setLinkSelected={setLinkSelected}
                arrowLeft
              />
            </>
          )}
        </div>
        <div className="navbar-rigth-container">
          {!isMobile && (
            <div className="navbar-search">
              <SearchIcon />
            </div>
          )}
          <Navlink text="Sign In" onClick={() => console.log("Sign in")} />
        </div>
        {}
        {linkSelected && (
          <Modal linkSlected={linkSelected} data={data.pages[0]} />
        )}
      </div>
    </>
  );
};

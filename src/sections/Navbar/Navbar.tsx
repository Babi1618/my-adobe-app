import { SearchIcon } from "../../components/icons/SearchIcon";
import { Navlink } from "../../stories/Navlink/Navlink";
import { NavlinkArrowLeft } from "../../stories/Navlink/Navlink.stories";
// import { NavlinkArrowLeft } from "../../stories/Navlink/Navlink";
import "./navbar.css";

export const Navbar = ({ isMobile }: any) => {
  const prova = () => {
    console.log("TODO");
  };
  return (
    <div className="navbar-container">
      <div>
        <div className="navlink-container navbar-image">
          <img
            src="https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg"
            alt="Adode, Inc."
          />
          <div>Adobe</div>
        </div>
        <NavlinkArrowLeft
          text="Creativity"
          onClick={() => console.log("Creativity")}
          arrowLeft
        />
        <NavlinkArrowLeft
          text="PDF & E-Signature"
          onClick={() => console.log("PDF & E-Signature")}
          arrowLeft
        />
        <NavlinkArrowLeft
          text="Marketing & Commerce"
          onClick={() => console.log("Marketing & Commerce")}
          arrowLeft
        />
        <NavlinkArrowLeft
          text="Help & Support"
          onClick={() => console.log("Help & Support")}
          arrowLeft
        />
      </div>
      <div>
        <div>
          <SearchIcon />
        </div>
        <Navlink text="Sign In" onClick={() => console.log("Sign in")} />
      </div>
    </div>
  );
};

import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Sidebar() {
  const location = useLocation().pathname;
  const isDesktop = useMediaQuery({maxResolution: 900})
  console.log(console.log(isDesktop))
  return (
    <div className="sidebar">
      <ol className="custom-list">
        <li className={location === "/" ? "active" : null}>YOUR INFO</li>
        <li className={location === "/plan" ? "active" : null}>SELECT PLAN</li>
        <li className={location === "/add_ons" ? "active" : null}>ADD-ON</li>
        <li
          className={
            location === "/summary" || location === "/thank_you"
              ? "active"
              : null
          }
        >
          SUMMARY
        </li>
      </ol>
    </div>
  );
}

export default Sidebar;

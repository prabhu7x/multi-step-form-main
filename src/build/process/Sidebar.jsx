import { useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation().pathname;
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

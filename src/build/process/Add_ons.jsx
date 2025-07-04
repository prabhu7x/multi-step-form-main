import React from "react";
import { useNavigate } from "react-router-dom";

function Add_ons() {
  const navigate = useNavigate();
  const next = () => {
    navigate("/summary");
  };
  const Go_back = () => {
    navigate("/plan");
  };
  return (
    <div className="card add_on">
      <div className="top">
        <h1>Pick add-ons</h1>
        <p>Add-ons helps enhance your gaming experience</p>
      </div>

      <div className="middle">
        <div className="services">
          <div className="service_card">
          <input type="checkbox" />
            <div>
              <p>Online service</p>
              <p>access to multiplayer games</p>
            </div>
          </div>
          <p>+$1/mo</p>
        </div>
        <div className="services">
          <div className="service_card">
            <input type="checkbox" />
            <div>
              <p>Larger storage</p>
              <p>Extra 1 TB of cloud save</p>
            </div>
          </div>
          <p>+$2/mo</p>
        </div>
        <div className="services">
          <div className="service_card">
            <input type="checkbox" />
            <div>
              <p>Customizable Profile</p>
              <p>custom theme on your profile</p>
            </div>
          </div>
          <p>+$2/mo</p>
        </div>
      </div>

      <div className="bottom">
        <button className="btn go_back" onClick={Go_back}>
          Go Back
        </button>
        <button className="btn next" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Add_ons;

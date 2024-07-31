import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Summary() {
  const data = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <div className="card summary">
      <div className="top">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
      </div>

      <div className="middle">
        <div className="head">
          <div className="header">
            <div className="title item">
              <div>
                <h3>
                  Arcade ({data.user_info.plan_type ? "Yearly" : "Monthly"})
                </h3>
                <a href="#">change</a>
              </div>
              <span>$9/mo</span>
            </div>
            <hr />
            <div className="item">
              <p>online service</p>
              <span>+$1/mo</span>
            </div>
            <div className="item">
              <p>Larger storage</p>
              <span>+$2/mo</span>
            </div>
          </div>

          <div className="total">
            <p>Total (per month)</p>
            <h3>+$12/mo</h3>
          </div>
        </div>
      </div>
      <div className="bottom">
        <button onClick={() => navigate("/add_ons")} className="btn go_back">
          Go Back
        </button>
        <button onClick={() => navigate("/thank_you")} className="btn next">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Summary;

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TotalPrice } from "../Components/TotalPrice";

function Summary() {
  const data = useSelector((state) => state.user);
  const {type, price} = data.selected_plan
  const plan_validity = data.user_info.yearly_plan_validity
  const navigate = useNavigate();
  return (
    <div className="card summary">
      <div className="top">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
      </div>

      <div className="middle">
        <div className="head">
            <div className="title item">
              <div>
                <h3>
                  {type} ({plan_validity ? "Yearly" : "Monthly"})
                </h3>
                <Link to='/plan'>Change</Link>
              </div>
              <span>{plan_validity ? `$${price.yearly}/yr` : `${price.monthly}/mo`}</span>
            </div>
            <hr />
          {data.selected_add_ons.map((item, i) =>
            <div key={i} className="header">
            <div className="item">
              <p>{item.title}</p>
              <span>{plan_validity ? `+$${item.price.yearly}/yr` : `+$${item.price.monthly}/mo`}</span>
            </div>
          </div> )}

          <div className="total">
            <p>Total (per month)</p>
            <h3>{<TotalPrice />}</h3>
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

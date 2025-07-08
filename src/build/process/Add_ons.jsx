import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Pick_add_ons } from "./redux/AppSlice";

function Add_ons() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.user_info);
  const dispatch = useDispatch();

  const next = () => {
    navigate("/summary");
  };
  const data = useSelector((state) => state.user);
  const add_ons = data.selected_add_ons;

  const chooseAdd_ons = (obj) => {
    dispatch(Pick_add_ons(obj));
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
        {userData.add_ons.map((data, i) =>{
        const isChecked = add_ons.some(addon => addon.title === data.title)
        return (
          <div key={i} className={`services ${isChecked ? "checked" : null}`}>
            <div className="service_card">
              <input
                checked={isChecked}
                onChange={() => chooseAdd_ons(data)}
                id={i}
                type="checkbox"
              />
              <div>
                <p>{data.title}</p>
                <p>access to multiplayer games</p>
              </div>
            </div>
            <p>
              {userData.plan_type
                ? `+${data.price.yearly}/yr`
                : `+${data.price.monthly}/mo`}
            </p>
          </div>
        )})}
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

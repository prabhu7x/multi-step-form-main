import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { plan_validity, select_plan } from "./redux/AppSlice";

function Select_Plan() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [plan_type, setPlanType] = useState(data.user_info.yearly_plan_validity);
// get plan name if clicked tag name (which is data-value) has same  name
  const [choosePlanType, setChoosePlanType] = useState(data.selected_plan && data.selected_plan.type ? data.selected_plan : data.user_info.plan[0] )
  
  const choosePlanType_handler = (e,plan_mode,index)=>{
    const clickedPlan_name = e.currentTarget.dataset.value 
    const {type} = plan_mode
    if(clickedPlan_name === type ){
      const selected = data.user_info.plan[index]
      setChoosePlanType(selected)
      dispatch(select_plan(selected))
    }
  }
  useEffect(()=>{
    if(data.selected_plan && data.selected_plan.type) {
      setChoosePlanType(data.selected_plan)
    }
  },[data.selected_plan])


  const next = () => {
    navigate("/add_ons");
    dispatch(plan_validity(plan_type))
    if(data.selected_plan === null) {
      dispatch(select_plan(choosePlanType))
    }
  };
  const Go_back = () => {
    navigate("/");
  };
  // toggle
  const toggle = () => {
    setPlanType(!plan_type);
  };
  // /main
  return (
    <div className="card plan">
      <div className="top">
        <h1>Select your Plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </div>

      {/* middle */}
      <div className="select_plan middle">
        <div className="game_mode">

          {data.user_info.plan.map((data, i)=><div key={i} data-value={data.type}
            onClick={(e) => choosePlanType_handler(e,data,i)}
            className={`plan_card ${data.type}  ${choosePlanType.type === data.type ? "selected_plan" : null}`}
          >
            <img src={data.image} alt="logo" />
            <h3>{data.type}</h3>
            <p>
              ${plan_type ? `${data.price.yearly}/yr` : `${data.price.monthly}/mo`}
            </p>
            {plan_type ? <p className="free">2 months free</p> : null}
          </div>)}
        </div>

        <div className="toggle">
          <span className="validity">Monthly</span>
          <label className="switch">
            <input type="checkbox" checked={plan_type} onChange={toggle} />
            <span className="slider round"></span>
          </label>
          <span className="validity">Yearly</span>
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

export default Select_Plan;

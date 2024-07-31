import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import images from "../Components/Images";
import { useDispatch, useSelector } from "react-redux";
import { add_user_details, choose_plan } from "./redux/AppSlice";

function Select_Plan() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [plan_type, setPlanType] = useState(data.user_info.plan_type);

  const initialPlan_state = {
    arcade: false,
    advance: false,
    pro: false
  }
  const [choosePlanType, setChoosePlanType] = useState(initialPlan_state)
  const choosePlanType_handler = (plan)=>{
    setChoosePlanType({...initialPlan_state, [plan]:!choosePlanType[plan]})
    console.log(choosePlanType.arcade, choosePlanType.advance, choosePlanType.pro);
  }
  useEffect(()=>{
    setChoosePlanType({arcade: true})
    console.log('useeffect',choosePlanType.arcade, choosePlanType.advance, choosePlanType.pro);
  },[])
  // const [arcade, setArcade] = useState(false);
  // const [advance, setAdvance] = useState(false);
  // const [pro, setPro] = useState(false);


  const next = () => {
    navigate("/add_ons");
    dispatch(add_user_details({ plan_type }));
    dispatch(choose_plan("Pro"));
    console.log(data.selected_plan);
  };
  const Go_back = () => {
    navigate("/");
  };
  //
  const per_year = data.user_info.plan.yearly;
  const per_month = data.user_info.plan.monthly;
  // toggle
  const toggle = () => {
    setPlanType(!plan_type);
  };
  //
  const select_plan = (plan1, plan2, selected_plan) => {
    console.log(arcade, advance, pro);
    plan1(false);
    plan2(false);
    selected_plan(true);
  };
  //
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
          <div
            onClick={() => choosePlanType_handler('arcade')}
            className={`plan_card arcade ${choosePlanType.arcade ? "selected_plan" : null}`}
          >
            <img src={images.arcade} alt="" />
            <h3>Arcade</h3>
            <p>
              ${plan_type ? `${per_year.Arcade}/yr` : `${per_month.Arcade}/mo`}
            </p>
            {plan_type ? <p className="free">2 months free</p> : null}
          </div>

          <div
            onClick={() => choosePlanType_handler('advance')}
            className={`plan_card advance ${choosePlanType.advance ? "selected_plan" : null}`}
          >
            <img src={images.advance} alt="" />
            <h3>Advance</h3>
            <p>
              $
              {plan_type ? `${per_year.Advance}/yr` : `${per_month.Advance}/mo`}
            </p>
            {plan_type ? <p className="free">2 months free</p> : null}
          </div>

          <div
            onClick={() => choosePlanType_handler('pro')}
            className={`plan_card  ${choosePlanType.pro ? "selected_plan" : null}`}
          >
            <img src={images.pro} alt="" />
            <h3>Pro</h3>
            <p>${plan_type ? `${per_year.Pro}/yr` : `${per_month.Pro}/mo`}</p>
            {plan_type ? <p className="free">2 months free</p> : null}
          </div>
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
          Go back
        </button>
        <button className="btn next" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Select_Plan;

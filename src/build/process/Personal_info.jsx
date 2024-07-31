import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_user_details } from "./redux/AppSlice";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

function Personal_info() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.user);

  // user details
  const user_name = data.user_info.name;
  const user_email = data.user_info.email;
  const user_phone = data.user_info.phone;

  const name_ref = useRef();
  const [name, setName] = useState(user_name);

  const [email, setEmail] = useState(user_email);
  const [validEmail, setValidEmail] = useState(false);

  const [phone, setPhone] = useState(user_phone);
  const [phone_status, setPhone_status] = useState(true);

  useEffect(() => {
    name_ref.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    if (result) {
      setValidEmail(true);
    }
  }, [email]);

  const next = () => {
    const status = Boolean(phone);
    navigate("/plan");
    if (status) {
      setPhone_status(true);
      navigate("/plan");
      dispatch(add_user_details({ name, email, phone }));
      console.log(name, email, phone);
    } else {
      setPhone_status(false);
    }
  };

  //
  // return
  return (
    <div className="card personal_info">
      <div className="top">
        <h1>Personal info</h1>
        <p>Please provide your name, email address and phone number.</p>
      </div>

      <form className="middle">
        <p>Name</p>
        <input
          className="name"
          value={name}
          ref={name_ref}
          type="text"
          placeholder="e.g Stephen King"
          onChange={(e) => setName(e.target.value)}
        />
        <p className="email">
          <span>Email Address</span>{" "}
          <span className="alert">
            {!validEmail ? "valid email required" : null}
          </span>
        </p>
        <input
          type="email"
          value={email}
          placeholder="e.g. stephenking@lorem.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>
          <span>Phone Number</span>
          <span className="alert">
            {!phone_status ? "This field is required" : null}{" "}
          </span>
        </p>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. +1234 567 890"
          className="phone"
        />
      </form>

      <div className="bottom">
        <button className="btn next" onClick={next}>
          Next step
        </button>
      </div>
    </div>
  );
}

export default Personal_info;

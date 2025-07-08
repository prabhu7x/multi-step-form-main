import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_info: {
    name: "",
    email: "",
    phone: "",
    plan: [
      {type: "Arcade", image: "./assets/images/icon-arcade.svg", price: {monthly: 9, yearly: 90}},
      {type: "Advance", image: "./assets/images/icon-advanced.svg", price: {monthly: 12, yearly: 120}},
      {type: "Pro", image: "./assets/images/icon-pro.svg", price: {monthly: 15, yearly: 150}}
    ],
    yearly_plan_validity: false,
    add_ons: [
       {title: "Online service", desc: "access to multiplayer games", price: {monthly: 1, yearly: 10}},
       {title: "Larger storage", desc: "Extra 1 TB of cloud save", price: {monthly: 2, yearly: 20}},
       {title: "Customizable Profile", desc: "custom theme on your profile", price: {monthly: 2, yearly: 20}}
      ],
  },
  selected_plan: null,
  selected_add_ons: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add_user_details: (state, action) => {
      state.user_info = {
        ...state.user_info,
        ...action.payload,
      };
    },
    plan_validity: (state, action) => {
      state.user_info.yearly_plan_validity = action.payload
    },
    select_plan: (state, action) =>{
      state.selected_plan = action.payload
    },
    Pick_add_ons: (state, action)=>{
      const {title} = action.payload
      const exists = state.selected_add_ons.some(obj=> obj.title === title)
      if(exists) {
        state.selected_add_ons = state.selected_add_ons.filter(obj=> obj.title !== title)
      }else {
        state.selected_add_ons.push(action.payload)
      }
    }
  },
});

export default userSlice.reducer;

export const { add_user_details, plan_validity, select_plan, Pick_add_ons } = userSlice.actions;

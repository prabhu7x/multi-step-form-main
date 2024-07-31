import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_info: {
    name: "",
    email: "",
    phone: "",
    plan: {
      monthly: {
        Arcade: 9,
        Advance: 12,
        Pro: 15,
      },
      yearly: {
        Arcade: 90,
        Advance: 120,
        Pro: 150,
      },
    },
    plan_type: false,
    add_ons: {
      monthly: {
        online_service: 1,
        larger_storage: 2,
        customizable_profile: 2,
      },
      yearly: {
        online_service: 10,
        larger_storage: 20,
        customizable_profile: 20,
      },
    },
  },
  selected_plan: [],
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
    choose_plan: (state, action) => {
      const { plan_type } = state.user_info;
      const selectedPlan = plan_type
        ? state.user_info.plan.yearly[action.payload]
        : state.user_info.plan.monthly[action.payload];

      state.selected_plan.push(selectedPlan);
      console.log(action.payload);
    },
  },
});

export default userSlice.reducer;

export const { add_user_details, choose_plan } = userSlice.actions;

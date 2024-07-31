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

const { online_service } = initialState;
console.log(online_service);

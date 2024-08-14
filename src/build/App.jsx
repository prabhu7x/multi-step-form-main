import React from "react";
import { Route, Routes } from "react-router-dom";
import Personal_info from "./process/Personal_info";
import Select_Plan from "./process/Select_Plan";
import Add_ons from "./process/Add_ons";
import Sidebar from './process/Sidebar'
import Summary from "./process/Summary";
import Thank_you from "./process/Thank_you";
import './app.css'

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Sidebar />
        <Routes basename="/multi-step-form-main">
          {/* <Route path="/multi-step-form-main" element={<Personal_info />} /> */}
          <Route index element={<Personal_info />} />
          <Route path="/plan" element={<Select_Plan />} />
          <Route path="/add_ons" element={<Add_ons />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/thank_you" element={<Thank_you />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

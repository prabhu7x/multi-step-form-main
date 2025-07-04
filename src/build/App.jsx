import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Personal_info from "./process/Personal_info";
import Select_Plan from "./process/Select_Plan";
import Add_ons from "./process/Add_ons";
import Summary from "./process/Summary";
import Thank_you from "./process/Thank_you";
import Layout from "./Components/Layout";
import './app.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Personal_info />} />
            <Route path="plan" element={<Select_Plan />} />
            <Route path="add_ons" element={<Add_ons />} />
            <Route path="summary" element={<Summary />} />
            <Route path="thank_you" element={<Thank_you />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

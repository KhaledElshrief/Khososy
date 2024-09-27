import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Subscripe from "./pages/Subscripe";
import WorkAsTeacher from "./pages/WorkAsTeacher";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<WorkAsTeacher />} />
          <Route path="/subscribe" element={<Subscripe />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
};

export default App;

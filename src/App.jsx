import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Subscripe from "./pages/Subscripe";
import WorkAsTeacher from "./pages/WorkAsTeacher";
import For_students from "./pages/for_students";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<WorkAsTeacher />} />
          <Route path="/subscribe" element={<Subscripe />} />
          <Route path="/forstudents" element={<For_students />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
};

export default App;

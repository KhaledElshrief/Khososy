import React from "react";
import Tcourses from "../components/T-courses.jsx";
import WTabout from "../components/WT-about.jsx";
import TeachingSystems from "../components/TeachingSystems.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function WorkAsTeacher() {
  return (
    <>
      <Navbar />
      <WTabout />
      <Tcourses />
      <TeachingSystems />
      <Footer />
    </>
  );
}

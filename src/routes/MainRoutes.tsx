import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classes from "../pages/Classes";
import Courses from "../pages/Courses";
import EditCourse from "../pages/EditCourse";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/course/:id" element={<EditCourse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;

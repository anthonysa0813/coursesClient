import React from "react";
import Search from "../components/Search";
import Table from "../components/Table";
import MainLayout from "../layout/MainLayout";

import { BoxContainer } from "../styles/CourseStyle";

const Courses = () => {
  return (
    <MainLayout>
      <Search />
      <Table />
    </MainLayout>
  );
};

export default Courses;

import { Button } from "@/components/ui/button.jsx";
import "./warehouse.styles.css";
import { Combobox } from "@/components/ui/combobox";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchWarehouse } from "../query/AxiosRequests";
import { useState } from "react";
import {
  departmentList,
  facultyList,
  genderList,
  instructorList,
  majorList,
  rankList,
  semesterList,
  studentList,
  universityList,
  yearList,
} from "./dropDownList";

const WarehousePage = () => {
  const [currentQuery, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    data: results,
    refetch: refetchWarehouse,
    isPending,
    isError,
  } = useQuery({
    queryKey: [searchParams.toString(), searchParams],
    queryFn: fetchWarehouse,
    enabled: false,
  });

  const queryDb = () => {
    refetchWarehouse();
    setQuery(searchParams);
  };
  const handleReset = () => {
    setSearchParams({});
    setQuery({});
  };
  const handleData = () => {
    if (isError) {
      return <h1>ERROR</h1>;
    }
    if (isPending) {
      return <h1>PENDING</h1>;
    }
    return <h1>{results[0].count}</h1>;
  };
  return (
    <div className="FilterContainer">
      <h1>School Data Warehouse</h1>
      <Combobox name="Instructor" list={instructorList}></Combobox>
      <Combobox name="Rank" list={rankList}></Combobox>
      <Combobox name="Instructor-Fac" list={facultyList}></Combobox>
      <Combobox name="Instructor-Uni" list={universityList}></Combobox>
      <Combobox name="Student" list={studentList}></Combobox>
      <Combobox name="Major" list={majorList}></Combobox>
      <Combobox name="Gender" list={genderList}></Combobox>
      <Combobox name="Department" list={departmentList}></Combobox>
      <Combobox name="Course-Fac" list={facultyList}></Combobox>
      <Combobox name="Course-Uni" list={universityList}></Combobox>
      <Combobox name="Semester" list={semesterList}></Combobox>
      <Combobox name="Year" list={yearList}></Combobox>
      <Button onClick={queryDb}>Get Results</Button>
      <Button onClick={handleReset}>Reset</Button>
      {handleData()}
      <p>{currentQuery.toString()}</p>
    </div>
  );
};

export default WarehousePage;

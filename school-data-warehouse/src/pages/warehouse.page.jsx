import { Button } from "@/components/ui/button.jsx";
import "./warehouse.styles.css";
import { Combobox } from "@/components/ui/combobox";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchWarehouse } from "../query/AxiosRequests";
import { useState } from "react";
import { terminal } from "virtual:terminal";
import {
  courseList,
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
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const WarehousePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [savedResultsState, setSavedResults] = useState({});
  const {
    data: results,
    refetch: refetchWarehouse,
    isPending,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: [searchParams.toString(), searchParams],
    queryFn: fetchWarehouse,
    enabled: false,
  });

  const queryDb = () => {
    refetchWarehouse();
  };
  const handleReset = () => {
    localStorage.clear();
    setSavedResults({});
    setSearchParams({});
  };
  const handleData = () => {
    if (isError) {
      return <h1 className="error">ERROR</h1>;
    }
    if (isLoading) {
      return <h1 className="pending">PENDING</h1>;
    }
    if (isSuccess) {
      return <h1 className="result">{`Result: ${results[0].count}`}</h1>;
    }
  };
  const handleSave = () => {
    let savedResults = JSON.parse(localStorage.getItem("savedResults"));
    // Create local host file if saved does not exist
    const searchParamString = searchParams.toString();
    console.log(searchParams.toString());
    if (!savedResults) {
      savedResults = {};
      savedResults[searchParamString] = results[0].count;
    } else if (
      Object.keys(savedResults).length < 5 &&
      !(searchParamString in savedResults)
    ) {
      savedResults[searchParamString] = results[0].count;
    } else {
      return;
    }
    localStorage.setItem("savedResults", JSON.stringify(savedResults));
    setSavedResults(savedResults);
  };
  const handleSaveButton = () => {
    if (isSuccess) {
      return <Button onClick={handleSave}>Save</Button>;
    } else return;
  };

  const handleTableItems = () => {
    const tableList = [];
    for (const key in savedResultsState) {
      tableList.push(
        <TableRow key={key}>
          <TableCell>{key}</TableCell>
          <TableCell>{savedResultsState[key]}</TableCell>
        </TableRow>
      );
    }
    return tableList;
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
      <Combobox name="Course" list={courseList}></Combobox>
      <Combobox name="Department" list={departmentList}></Combobox>
      <Combobox name="Course-Fac" list={facultyList}></Combobox>
      <Combobox name="Course-Uni" list={universityList}></Combobox>
      <Combobox name="Semester" list={semesterList}></Combobox>
      <Combobox name="Year" list={yearList}></Combobox>
      <Button onClick={queryDb}>Get Results</Button>
      <Button onClick={handleReset}>Reset</Button>
      {handleSaveButton()}
      {handleData()}
      <Table>
        <TableCaption>Saved Results</TableCaption>
        <TableHeader>
          <TableHead>Query Parameters</TableHead>
          <TableHead>Result</TableHead>
        </TableHeader>
        <TableBody>{handleTableItems()}</TableBody>
      </Table>
    </div>
  );
};

export default WarehousePage;

import { Button } from "@/components/ui/button.jsx";
import "./warehouse.styles.css";
import { Combobox } from "@/components/ui/combobox";
import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchWarehouse } from "../query/AxiosRequests";

const WarehousePage = () => {
  const semesterList = [
    { value: "0", label: "Fall" },
    { value: "1", label: "Winter" },
    { value: "2", label: "Spring/Summer" },
  ];

  const yearList = Array.from(Array(2025 - 1993)).map((e, i) => {
    return {
      value: "" + (i + 1993),
      label: "" + (i + 1993),
    };
  });

  const rankList = [
    { value: "0", label: "Associate" },
    { value: "1", label: "Assistant" },
    { value: "2", label: "Sessional" },
  ];

  const universityList = [
    { value: "0", label: "University of Alberta" },
    { value: "1", label: "Macewan University" },
    { value: "2", label: "University Of Calgary" },
  ];

  const facultyList = [
    {
      value: "0",
      label: "Faculty of Arts and Science",
    },
    { value: "1", label: "Faculty of Nursing" },
    {
      value: "2",
      label: "Faculty of Fine Arts and Communications",
    },
    { value: "3", label: "Faculty of Health and Community Studies" },
  ];

  const genderList = [
    { value: "0", label: "Male" },
    { value: "1", label: "female" },
    { value: "2", label: "Other" },
  ];

  const majorList = [
    { value: "0", label: "Computer Science" },
    { value: "1", label: "Mathematics" },
    { value: "2", label: "Nursing" },
    { value: "3", label: "Health Systems" },
    { value: "4", label: "Music" },
    { value: "5", label: "Design" },
    { value: "6", label: "Child Care" },
    { value: "7", label: "Public Safety" },
  ];

  const instructorList = [
    { value: "0", label: "Big Man" },
    { value: "1", label: "Small Man" },
    { value: "2", label: "Bigger Man" },
    { value: "3", label: "Smaller Man" },
  ];
  const studentList = [
    { value: "0", label: "Crusher Bate" },
    { value: "1", label: "Bimpo Bompo" },
    { value: "2", label: "Jaz Man" },
    { value: "3", label: "Bumbo Bimpo" },
  ];
  const departmentList = [
    { value: "0", label: "Computer Science" },
    { value: "1", label: "Mathematics abd Staistics" },
    { value: "2", label: "Nursing Practice" },
    { value: "3", label: "Health Systems and Sustainablility" },
    { value: "4", label: "Music" },
    { value: "5", label: "Design" },
    { value: "6", label: "Child Care And Youth Care" },
    { value: "7", label: "Public Safety And Justice Studies" },
  ];
  const [searchParams, _] = useSearchParams();
  const queryClient = useQueryClient();
  const {
    data: results,
    refetch: refetchWarehouse,
    isPending,
    isError,
  } = useQuery({
    queryKey: [searchParams.toString(), searchParams],
    queryFn: fetchWarehouse,
    onSuccess: () => {
      alert("DONE!");
    },
    enabled: false,
  });

  const queryDb = () => {
    // queryClient.invalidateQueries();
    refetchWarehouse();
    // fetchWarehouse([0, searchParams]);
  };

  return (
    <div className="FilterContainer">
      <h1>wusup</h1>
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
    </div>
  );
};

export default WarehousePage;

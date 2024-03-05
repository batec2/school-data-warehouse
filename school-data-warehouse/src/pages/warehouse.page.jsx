import { Button } from "@/components/ui/button.jsx";
import "./warehouse.styles.css";
import { Combobox } from "@/components/ui/combobox";

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

  const instructorList = [];
  const studentList = [];
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

  return (
    <div>
      <h1>Page1</h1>
      <Button>Button</Button>
      <Combobox name="Instructor" list={instructorList}></Combobox>
      <Combobox name="Rank" list={rankList}></Combobox>
      <Combobox name="Instructor-Faculty" list={facultyList}></Combobox>
      <Combobox name="Instructor University" list={universityList}></Combobox>
      <Combobox name="Student" list={studentList}></Combobox>
      <Combobox name="Major" list={majorList}></Combobox>
      <Combobox name="Gender" list={genderList}></Combobox>
      <Combobox name="Department" list={departmentList}></Combobox>
      <Combobox name="Course-Faculty" list={facultyList}></Combobox>
      <Combobox name="Course-University" list={universityList}></Combobox>
      <Combobox name="Semester" list={semesterList}></Combobox>
      <Combobox name="Year" list={yearList}></Combobox>
    </div>
  );
};

export default WarehousePage;

import { Button } from "@/components/ui/button.jsx";
import "./warehouse.styles.css";
import { Combobox } from "@/components/ui/combobox";
import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchWarehouse } from "../query/AxiosRequests";

const WarehousePage = () => {
  const semesterList = [
    { value: "fall", label: "Fall" },
    { value: "winter", label: "Winter" },
    { value: "spring/summer", label: "Spring/Summer" },
  ];

  const yearList = Array.from(Array(2025 - 1993)).map((e, i) => {
    return {
      value: "" + (i + 1993),
      label: "" + (i + 1993),
    };
  });

  const rankList = [
    { value: "assistant", label: "Assistant" },
    { value: "associate", label: "Associate" },
    { value: "senior", label: "Senior" },
    { value: "other", label: "Other" },
  ];

  const universityList = [
    { value: "macewan", label: "MacEwan" },
    { value: "uof", label: "UoA" },
    { value: "uoc", label: "UoC" },
    { value: "nait", label: "NAIT" },
    { value: "sait", label: "SAIT" },
    { value: "concordia", label: "Concordia" },
  ];

  const facultyList = [
    { value: "arts & science", label: "Arts & Science" },
    { value: "fine arts & culture", label: "Fine Arts & Culture" },
    { value: "health studies", label: "Health Studies" },
    { value: "nursing", label: "Nursing" },
    { value: "business", label: "Business" },
    { value: "continuing education", label: "Continuing Education" },
  ];

  const genderList = [
    { value: "male", label: "Male" },
    { value: "female", label: "female" },
    { value: "other", label: "Other" },
  ];

  const majorList = [
    { value: "finance", label: "Finance" },
    { value: "accounting", label: "Accounting" },
    { value: "anthropology", label: "Anthropology" },
    { value: "economics", label: "Economics" },
    { value: "political sciences", label: "Political Sciences" },
    { value: "art", label: "Art" },
    { value: "child & youth care", label: "Child & Youth care" },
    { value: "biology", label: "Biology" },
    { value: "physics", label: "Physics" },
    { value: "chemistry", label: "Chemistry" },
    { value: "mathematics", label: "Mathematics" },
    { value: "computer Science", label: "Computer Science" },
    { value: "humanities", label: "Humanities" },
    { value: "design", label: "Design" },
    { value: "communications", label: "Communications" },
    { value: "health systems", label: "Health systems" },
    { value: "human health", label: "Human Health" },
    { value: "early learning", label: "Early learning" },
    { value: "international business", label: "International Business" },
    { value: "music", label: "Music" },
    { value: "management", label: "Management" },
    { value: "nursing", label: "Nursing" },
    { value: "social work", label: "Social Work" },
    { value: "psychology", label: "Psychology" },
    { value: "physical sciences", label: "Physical Sciences" },
    { value: "professional nursing", label: "Professional Nursing" },
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

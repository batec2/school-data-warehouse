export const semesterList = [
  { value: "fall", label: "Fall" },
  { value: "winter", label: "Winter" },
  { value: "spring/summer", label: "Spring/Summer" },
];

export const yearList = Array.from(Array(2025 - 1993)).map((e, i) => {
  return {
    value: "" + (i + 1993),
    label: "" + (i + 1993),
  };
});

export const rankList = [
  { value: "assistant", label: "Assistant" },
  { value: "associate", label: "Associate" },
  { value: "senior", label: "Senior" },
  { value: "other", label: "Other" },
];

export const universityList = [
  { value: "macewan", label: "MacEwan" },
  { value: "uof", label: "UoA" },
  { value: "uoc", label: "UoC" },
  { value: "nait", label: "NAIT" },
  { value: "sait", label: "SAIT" },
  { value: "concordia", label: "Concordia" },
];

export const facultyList = [
  { value: "arts & science", label: "Arts & Science" },
  { value: "fine arts & culture", label: "Fine Arts & Culture" },
  { value: "health studies", label: "Health Studies" },
  { value: "nursing", label: "Nursing" },
  { value: "business", label: "Business" },
  { value: "continuing education", label: "Continuing Education" },
];

export const genderList = [
  { value: "male", label: "Male" },
  { value: "female", label: "female" },
  { value: "other", label: "Other" },
];

export const majorList = [
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

export const instructorList = [
  { value: "0", label: "Big Man" },
  { value: "1", label: "Small Man" },
  { value: "2", label: "Bigger Man" },
  { value: "3", label: "Smaller Man" },
];

export const courseList = Array.from(Array(20000)).map((e, i) => {
  return {
    value: "" + (i + 1),
    label: "" + (i + 1),
  };
});

export const studentList = Array.from(Array(100000)).map((e, i) => {
  return {
    value: "" + (i + 1),
    label: "" + (i + 1),
  };
});

export const departmentList = [
  { value: "0", label: "Computer Science" },
  { value: "1", label: "Mathematics abd Staistics" },
  { value: "2", label: "Nursing Practice" },
  { value: "3", label: "Health Systems and Sustainablility" },
  { value: "4", label: "Music" },
  { value: "5", label: "Design" },
  { value: "6", label: "Child Care And Youth Care" },
  { value: "7", label: "Public Safety And Justice Studies" },
];

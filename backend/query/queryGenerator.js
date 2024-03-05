/**
 *
 * @param {SearchParams} query
 * @returns {String}
 */
const queryGenerator = (query) => {
  if (!query || Object.keys(query).length === 0) {
    return "SELECT COUNT(*) from warehouse";
  }

  let selectString = "SELECT COUNT(*) FROM warehouse";
  let whereString = " WHERE";

  //Add Join for instructors
  if (
    "Instructor" in query ||
    "Rank" in query ||
    "Instructor-Fac" in query ||
    "Instructor-Uni" in query
  ) {
    selectString += ",instructors";
    whereString += " instructors.instructor = warhouse.instructor";
  }
  // Adds Join for Students
  if ("Student" in query || "Major" in query || "Gender" in query) {
    selectString += ",students";
    if (whereString.length > 5) {
      whereString += " AND";
    }
    whereString += " students.student = warehouse.student";
  }
  // Adds Join for Courses
  if ("Department" in query || "Course-Fac" in query || "Course-Uni" in query) {
    selectString += ",courses";
    if (whereString.length > 5) {
      whereString += " AND";
    }
    whereString += " students.student = warehouse.student";
  }
  // Adds Join for Date
  if ("Semster" in query || "Year" in query) {
    selectString += ",date";
    if (whereString.length > 5) {
      whereString += " AND";
    }
    whereString +=
      " date.semester = warehouse.semester AND date.year = warehouse.year";
  }

  if ("Instructor" in query) {
    whereString += ` AND warehouse.instructor = ${query.Instructor}`;
  }
  if ("Rank" in query) {
    whereString += ` AND instructors.rank = ${query.Rank}`;
  }
  if ("Instructor-Fac" in query) {
    whereString += ` AND instructors.faculty = ${query["Instructor-Fac"]}`;
  }
  if ("Instructor-Uni" in query) {
    whereString += ` AND instructors.university = ${query["Instructor-Uni"]}`;
  }
  if ("Student" in query) {
    whereString += ` AND warehouse.student = ${query.Student}`;
  }
  if ("Major" in query) {
    whereString += ` AND students.major = ${query.Major}`;
  }
  if ("Gender" in query) {
    whereString += ` AND students.gender = ${query.Gender}`;
  }
  if ("Department" in query) {
    whereString += ` AND courses.department = ${query.Department}`;
  }
  if ("Course-Fac" in query) {
    whereString += ` AND courses.faculty = ${query["Course-Fac"]}`;
  }
  if ("Course-Uni" in query) {
    whereString += ` AND courses.university = ${query["Course-Uni"]}`;
  }
  if ("Semester" in query) {
    whereString += ` AND date.semester = ${query.Semester}`;
  }
  if ("Year" in query) {
    whereString += ` AND date.year = ${query.Year}`;
  }
  return selectString + whereString;
};

export default queryGenerator;

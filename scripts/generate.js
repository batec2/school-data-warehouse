import sql from "mssql";
import dotenv from "dotenv";
dotenv.config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

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

const instructorList = [];
const studentList = [];

sql.connect(config).then(async () => {
  const table = new sql.Table("takes");
  table.create = true;
  table.columns.add("id", sql.Int, { nullable: false });
  table.columns.add("student_id", sql.Int, { nullable: false });
  table.columns.add("grades", sql.SmallInt, { nullable: true });

  const sectionsInactive =
    await sql.query`select top(40) id from sections where year<2023`;
  const studentsInactive =
    await sql.query`select * from students where active = 0`;

  Promise.all([sectionsInactive, studentsInactive]).then((result) => {
    const request = new sql.Request();
    let i = 0;
    result[0].recordset.forEach((section) => {
      result[1].recordset.forEach((student) => {
        table.rows.add(section.id, student.student_id, 40);
        if (i === 100000) {
          request.bulk(table, (err, result) => {
            if (err) {
              console.log(err);
            } else {
              console.log(result);
            }
          });
          i = 0;
        }
        i++;
      });
    });
    request.bulk(table, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  });
});

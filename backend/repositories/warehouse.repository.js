import Students from "../model/students.js";
import Warehouse from "../model/warehouse.js";
import Courses from "../model/courses.js";
import SemesterYear from "../model/date.js";
import Instructors from "../model/instructors.js";

/**
 *
 * @param {*} req
 * @returns
 */
export const getDataFromRepository = async (req, generatedQuery) => {
  try {
    const query = req.app.locals.db.request();
    // adds the parameters for the stored procedure
    query.input("query", generatedQuery);
    const results = await query.execute("spExecuteQuery");
    return results.recordset;
  } catch (err) {
    console.log(err);
    throw Error("Failed to get result from database");
  }
};

/**
 * Add data from xml into Warehouse
 * @param {*} req
 * @param {*} data
 */
export const insertDataRepository = async (req, data) => {
  const db = req.app.locals.db;
  for (const table in data) {
    console.log(table);
    switch (table) {
      case "students": {
        const studentsTable = Students();
        data.students.forEach(({ student, major, gender }) => {
          studentsTable.rows.add(student, major, gender);
        });
        insertBulk(db, studentsTable);
        break;
      }
      case "courses": {
        const coursesTable = Courses();
        data.courses.forEach(({ course, department, faculty, university }) => {
          coursesTable.rows.add(course, department, faculty, university);
        });
        insertBulk(db, coursesTable);
        break;
      }
      case "date": {
        const dateTable = SemesterYear();
        data.date.forEach(({ semester_year_id, semester, year }) => {
          dateTable.rows.add(semester_year_id, semester, year);
        });
        insertBulk(db, dateTable);
        break;
      }
      case "instructors": {
        const instructorTable = Instructors();
        data.instructors.forEach(
          ({ instructor, faculty, rank, university }) => {
            instructorTable.rows.add(instructor, faculty, rank, university);
          }
        );
        insertBulk(db, instructorTable);
        break;
      }
    }
  }
  if (data.warehouse) {
    const warehouseTable = Warehouse();
    data.warehouse.forEach(
      ({ instructor, student, course, semester, year }) => {
        warehouseTable.rows.add(instructor, student, course, semester, year);
      }
    );
    insertBulk(db, warehouseTable);
  }
};

const insertBulk = (db, table) => {
  const query = db.request();
  query.bulk(table, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  });
};

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
  try {
    const db = req.app.locals.db;
    for (const table in data) {
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
          data.courses.forEach(
            ({ course, department, faculty, university }) => {
              coursesTable.rows.add(course, department, faculty, university);
            }
          );
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
  } catch (e) {
    throw e;
  }
};

const insertBulk = async (db, table) => {
  const query = db.request();
  return query
    .bulk(table)
    .then((err, result) => {
      if (err) {
        throw new Exception();
      } else {
        console.log(result);
        return 1;
      }
    })
    .catch((e) => {
      return -1;
    });
};

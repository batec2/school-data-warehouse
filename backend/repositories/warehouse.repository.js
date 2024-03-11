import Warehouse from "../model/warehouse.js";

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
  const query = req.app.locals.db.request();
  const warehouseTable = Warehouse();
  data.warehouse.forEach(({ instructor, student, course, semester, year }) => {
    warehouseTable.rows.add(instructor, student, course, semester, year);
  });
  // console.log(warehouseTable);
  query.bulk(warehouseTable, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  });
};

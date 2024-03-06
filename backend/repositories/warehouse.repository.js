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

/**
 *
 * @param {*} req
 * @returns
 */
export const getDataFromRepository = async (req) => {
  try {
    console.log(req.query);
    const query = req.app.locals.db.request();
    //adds the parameters for the stored procedure
    query.input(queryString);
    const results = await query.execute("spGetFilteredSections");
    return results.recordset;
  } catch (err) {
    throw Error("Failed to get classes from database");
  }
};

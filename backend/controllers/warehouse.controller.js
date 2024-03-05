import queryGenerator from "../query/queryGenerator.js";

/**
 *
 * @param {*} req request
 * @param {*} res response
 */
export const getData = async (req, res) => {
  try {
    // const data = await getDataFromRepository();
    // res.status(200).send(data);
    console.log(req.query);
    const query = req.query;
    const generatedQuery = queryGenerator(query);
    console.log(generatedQuery);
    res.status(200).send("good");
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Failed" });
  }
};

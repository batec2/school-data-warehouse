import queryGenerator from "../query/queryGenerator.js";
import { getDataFromRepository } from "../repositories/warehouse.repository.js";

/**
 *
 * @param {*} req request
 * @param {*} res response
 */
export const getData = async (req, res) => {
  try {
    console.log(req.query);
    const query = req.query;
    const generatedQuery = queryGenerator(query);
    console.log(generatedQuery);
    const data = await getDataFromRepository(req, generatedQuery);
    console.log(data);
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Failed" });
  }
};

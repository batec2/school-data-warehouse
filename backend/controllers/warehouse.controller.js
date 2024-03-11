import queryGenerator from "../query/queryGenerator.js";
import {
  getDataFromRepository,
  insertDataRepository,
} from "../repositories/warehouse.repository.js";
import fs from "fs";
import parseXML from "../utils/parseXML.js";

/**
 *
 * @param {*} req request
 * @param {*} res response
 */
export const getData = async (req, res) => {
  try {
    console.log(req.query.data);
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

/**
 *
 * @param {*} req
 * @param {*} res
 */
export const insertFile = async (req, res) => {
  try {
    console.log(req.file);
    fs.readFile("./uploads/" + req.file.filename, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      try {
        const result = parseXML(data);
        insertDataRepository(req, result);
      } catch (e) {
        console.log(e);
      }
    });
    res.status(200).send();
  } catch (e) {
    console.log(e);
  }
};

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
    res.status(200).send("good");
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Failed" });
  }
};

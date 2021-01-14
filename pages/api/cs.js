import csData from "../../data/cs.json";
export default (req, res) => {
  res.statusCode = 200;
  res.json(csData);
};

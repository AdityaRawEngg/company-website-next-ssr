import rawData from "../../data/raw.json";
export default (req, res) => {
  res.statusCode = 200;
  res.json(rawData);
};

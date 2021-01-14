import surfboardData from "../../data/surfboard.json";
export default (req, res) => {
  res.statusCode = 200;
  res.json(surfboardData);
};

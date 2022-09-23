export default function user(req, res) {
  const { api_key, lang, region, id } = req.query;

  console.log(api_key);
  console.log(lang);
  console.log(region);
  console.log(id);

  res.json({ OK: true, message: "GET call" });
}

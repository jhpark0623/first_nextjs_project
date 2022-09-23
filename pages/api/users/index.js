export default function user(req, res) {
  switch (req.method) {
    case "GET":
      res.json({ OK: true, message: "GET call" });
      break;
    case "POST":
      res.json({ OK: true, message: "POST call" });
      break;
    case "DELETE":
      res.json({ OK: true, message: "DELETE call" });
      break;
  }
}

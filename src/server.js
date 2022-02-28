import express from "express";
import morgan from "morgan"; // import <이름> 이름은 상관 없음

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const home = (req, res) => {
  return res.send("hi");
};

app.use(logger);
app.get("/", home);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
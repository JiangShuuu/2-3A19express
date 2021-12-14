const express = require("express");
const app = express();
const port = 3000;

// handlebars
const { engine } = require("express-handlebars");
app.engine(
  "handlebars",
  engine({ extname: ".handlebars", defaultLayout: "main" })
);
app.set("view engine", "handlebars");

// 載入 CSS
app.use("/css", express.static("css"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/:page", (req, res) => {
  console.log("page name:", req.params.page);
  res.render(req.params.page);
});

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`);
});

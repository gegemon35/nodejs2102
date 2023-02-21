// const express = require("express");

// const app = express();
// app.get("/", function (request, response) {
//   response.send("<h1>Главная страница</h1>");
// });
// app.get("/about", function (request, response) {
//   response.send("<h1>О сайте</h1>");
// });
// app.get("/contact", function (request, response) {
//   response.send("<h1>Контакты</h1>");
// });
// app.listen(3000);

// const express = require("express");

// const app = express();
// app.get("/", function (request, response) {
//   response.send("<h1>Главная страница</h1>");
// });
// app.get("/about", function (request, response) {
//   response.send("<h1>О сайте</h1>");
// });
// app.get("/contact", function (request, response) {
//   response.send("<h1>Контакты</h1>");
// });
// app.listen(3000);

const express = require("express");

const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();

app.post("/user", jsonParser, function (request, response) {
  console.log(request.body);
  if (!request.body) return response.sendStatus(400);

  response.json(request.body); // отправляем пришедший ответ обратно
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.listen(3000);

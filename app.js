// const http = require("http");

// http
//   .createServer(function (request, response) {
//     response.setHeader("UserId", 12);
//     response.setHeader("Content-Type", "text/html; charset=utf-8;");
//     response.write("<h2>hello world</h2>");
//     response.end();
//   })
//   .listen(3000);

// const http = require("http");

// http
//   .createServer(function (request, response) {
//     response.setHeader("Content-Type", "text/html; charset=utf-8;");

//     if (request.url === "/home" || request.url === "/") {
//       response.write("<h2>Home</h2>");
//     } else if (request.url == "/about") {
//       response.write("<h2>About</h2>");
//     } else if (request.url == "/contact") {
//       response.write("<h2>Contacts</h2>");
//     } else {
//       response.write("<h2>Not found</h2>");
//     }
//     response.end();
//   })
//   .listen(3000);

// const http = require("http");

// http
//   .createServer(function (request, response) {
//     response.setHeader("Content-Type", "text/html; charset=utf-8;");

//     if (request.url === "/") {
//       response.statusCode = 302; // временная переадресация
//       // на адрес localhost:3000/newpage
//       response.setHeader("Location", "/newpage");
//     } else if (request.url == "/newpage") {
//       response.write("New address");
//     } else {
//       response.statusCode = 404; // адрес не найден
//       response.write("Not Found");
//     }
//     response.end();
//   })
//   .listen(3000);

// const http = require("http");
// const fs = require("fs");

// http
//   .createServer(function (request, response) {
//     console.log(`Запрошенный адрес: ${request.url}`);
//     // получаем путь после слеша
//     const filePath = request.url.substr(1);
//     // смотрим, есть ли такой файл
//     fs.access(filePath, fs.constants.R_OK, (err) => {
//       // если произошла ошибка - отправляем статусный код 404
//       if (err) {
//         response.statusCode = 404;
//         response.end("Resourse not found!");
//       } else {
//         fs.createReadStream(filePath).pipe(response);
//       }
//     });
//   })
//   .listen(3000, function () {
//     console.log("Server started at 3000");
//   });

// // подключение express
// const express = require("express");
// // создаем объект приложения
// const app = express();
// // определяем обработчик для маршрута "/"
// app.get("/", function (request, response) {
//   // отправляем ответ
//   response.send("<h2>Привет Express!</h2>");
// });
// // начинаем прослушивать подключения на 3000 порту
// app.listen(3000);

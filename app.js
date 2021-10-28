import express from "express";
import http from "http";
import errorHandlerMiddleware from "./frameworks/webserver/middlewares/errorHandlerMiddleware";
import router from "./frameworks/webserver/routes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.use(errorHandlerMiddleware);

const server = http.createServer(app);
server.listen(8080);

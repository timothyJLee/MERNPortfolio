import express from "express";
// import express = require("express");
import bodyParser from "body-parser";
import { TaskController } from "./controller/task.controller";
import fs = require("fs");


class App {
  public express: express.Application;
  //public logger: APILogger;
  public taskController: TaskController;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    //this.logger = new APILogger();
    this.taskController = new TaskController();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.express.get("/api/tasks", (req, res) => {
      this.taskController.getTasks().then((data: any) => res.json(data));
    });

    this.express.post("/api/task", (req, res) => {
      console.log(req.body);
      this.taskController
        .createTask(req.body.task)
        .then((data: any) => res.json(data));
    });

    this.express.put("/api/task", (req, res) => {
      this.taskController
        .updateTask(req.body.task)
        .then((data: any) => res.json(data));
    });

    this.express.delete("/api/task/:id", (req, res) => {
      this.taskController
        .deleteTask(req.params.id)
        .then((data: any) => res.json(data));
    });

    this.express.get("/", (req, res, next) => {
      res.send("Typescript App works!!");
    });

    // swagger docs
    this.express.use(
      "/api/docs"
      // swaggerUi.serve,
      // swaggerUi.setup(this.swaggerDocument, null, null, this.customCss)
    );

    // handle undefined routes
    this.express.use("*", (req, res, next) => {
      res.send("Make sure url is correct!!!");
    });
  }
}

export default new App().express;

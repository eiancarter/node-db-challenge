const express = require("express");

//add routers here
const ProjectRouter = require("")
const TaskRouter = require("")
const ResourceRouter = require("")

const server = express();

server.use(express.json());
server.use('api/projects', ProjectRouter);
server.use('api/resources', ResourceRouter);
server.use('api/tasks', TaskRouter);

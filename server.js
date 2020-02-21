const express = require("express");

//add routers here
const ProjectRouter = require("./api/project-router")
const ResourceRouter = require("./api/resource-router")

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);

server.get('/', (req, res) => {
    res.send('<h3>hello world</h3>');
});

module.exports = server;

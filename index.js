const server = require("./server");

const PORT = process.env.PORT || 5700;

server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`)
});

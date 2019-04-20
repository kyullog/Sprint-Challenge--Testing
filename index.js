const server = require("./server.js").games;

const port = 2525;

server.listen(port, () => console.log(`Server is listening on port ${port}`));

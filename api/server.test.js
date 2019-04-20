const server = require("./server.js");
const request = require("supertest");

describe("The server API", () => {
  describe("GET /", () => {
    it("should respond with a hello message", async () => {
      const res = await request(server).get("/");
      expect(res.body.message).toBe("Hello!");
      expect(res.status).toBe(200);
    });
  });
});

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

  describe("POST /games", () => {
    describe("it should take in an object with title, genre, and releaseYear key/value pairs", () => {});
    it("should add an object to the data array if correctly shaped object is passed", async () => {});
    it("should return status code 201 if correctly shaped object is passed", async () => {});
    it("should return a 422 status code if an incorrectly shaped object is passed", async () => {});
  });
});

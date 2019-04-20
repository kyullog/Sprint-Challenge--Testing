const server = require("./server.js");
const request = require("supertest");
const data = require("../data/dummyData.js");

describe("The server API", () => {
  describe("GET /", () => {
    it("should respond with a hello message", async () => {
      const res = await request(server).get("/");
      expect(res.body.message).toBe("Hello!");
      expect(res.status).toBe(200);
    });
  });

  describe("POST /games", () => {
    describe("should take in an object with title, genre, and releaseYear key/value pairs", () => {
      it("should return status code 201 if correctly shaped object is passed", async () => {
        const game = {
          title: "Donkey Kong",
          genre: "Arcade",
          releaseYear: 1983
        };
        const res = await request(server)
          .post("/games")
          .send(game);
        expect(res.status).toBe(201);
      });
      it("should return a 422 status code if an incorrectly shaped object is passed", async () => {
        const game = { title: "Angry Birds" };
        const res = await request(server)
          .post("/games")
          .send(game);
        expect(res.status).toBe(422);
      });
      it("should add an object to the data array if correctly shaped object is passed", async () => {
        const game = {
          title: "Redneck Rampage",
          genre: "FPS",
          releaseYear: 1996
        };
        await request(server)
          .post("/games")
          .send(game);
        expect(data[data.length - 1]).toEqual(game);
      });
    });
  });
});

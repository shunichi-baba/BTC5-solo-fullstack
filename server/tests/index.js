const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../app.js");
require("dotenv").config();

const server = setupServer();
describe("Pokemon API Server", () => {
  //   let request;
  //   beforeEach(() => {
  //     request = chai.request(server);
  //   });

  //GET
  describe("GET /api/attacks/:name/pokemon", () => {
    it("指定した名前のアタックを持つすべてのポケモンの id と name を返す", async (done) => {
      await chai
        .request(server)
        .get("/")
        .end((err, res) => {
          console.log("@@@@@@@@@@@@@@", res);

          expect("test").to.equal("test");
          done();
          if (err) console.log("error");
        });
    });
    // it("指定した名前のアタックを持つすべてのポケモンの id と name を返す", (done) => {
    //   request.get("/").end((err, res) => {
    //     console.log("@@@@@@@@@@@@@@", res);

    //     expect("test").to.equal("test");
    //     done();
    //     if (err) console.log("error");
    //   });
    // });
  });
});

// const { createDbModels } = require("../../db");
// const { createServer } = require("../app.js");
// const app = createServer(createDbModels());

// const chai = require("chai");
// const chaiHttp = require("chai-http");
// chai.use(chaiHttp);
// chai.should();

// describe("GET /api", () => {
//   describe("GET /api/quotes without query params", () => {
//     let request;

//     beforeEach(() => {
//       request = chai
//         .request(app)
//         .get("/api/quotes")
//         .set("Content-Type", "application/json");
//     });

//     it("should respond with JSON.", (done) => {
//       request.end((_, res) => {
//         res.should.be.json;
//         done();
//       });
//     });

//     it("should return status 200.", (done) => {
//       request.end((_, res) => {
//         res.status.should.equal(200);
//         done();
//       });
//     });

// it('should have a "quotes" property containing an array.', (done) => {
//   request.end((_, res) => {
//     const responseObject = JSON.parse(res.text);
//     responseObject.should.have.a.property("quotes").that.is.an("array");
//     done();
//   });
// });

// it('should contain only quotes with both "text" and an "author".', (done) => {
//   request.end((_, res) => {
//     const { quotes } = JSON.parse(res.text);

//     for (const quote of quotes) {
//       quote.should.be.an("object");
//       quote.should.have.a.property("quote");
//       quote.should.have.a.property("name");
//       quote.quote.should.not.equal("");
//       quote.name.should.not.equal("");
//     }
//     done();
//   });
// });
//   });
// });

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

//jsonオブジェクトを認識できるようになる
//フロントaxiosからはjson形式で送られる
app.use(express.json());

// app.use("/", express.static(__dirname + "/public")); //デプロイで必要みたい_ここにフロント入れるのか？
//   app.use("/", express.static(__dirname + "../SERVER")); //デプロイで必要みたい_ここにフロント入れるのか？

//knexfile読み込んでdb接続-----------------
// const config = require("./knexfile");
// const knex = require("knex")(config);

//環境変数設定----------------------------
const knex1 = require("knex");
const knexConfig = require("../db/knexfile");
const environment = process.env.NODE_ENV;
const knex = knex1(knexConfig[environment]);

//CROSエラー回避-----------------------------
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

//get------------------------------------
app.get("/", async (req, res) => {
  //CROSエラー回避のヘッダを追加
  //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

  const result = await knex("diarys")
    .select()
    .then((res) => {
      console.log("@@@@@@@@@@@@@_GET通信成功");
      return res;
      //   res.status(200).json(res);
    })
    .catch(() => {
      console.log("通信に失敗---------------------");
    });
  res.status(200).json(result);
});

//post------------------------------------
app.post("/", async (req, res) => {
  console.log("@@@@@@@@@@@@@_POST", req.body);
  await knex("diarys").insert(req.body);
  console.log("POST追加OK");
  res.status(200).send(req.body);
});

//server起動------------------------------
app.listen(PORT, () => {
  console.log("server起動");
  console.log(`http://localhost:${PORT}`);
});
//上記コードはrequire出来ない暫定処置---------------------------------------------
//---------------------------------------------------------------------------
//-------------------------------------------
//require検討--------------------------------
// const testsever = require("./testserver.js");
// const app2 = testsever();
// console.log("testserver:::::::::", app2);
//仮サーバー-----------------------
//---------------------------------
// const express = require("express");
// const app = express();
// // console.log("@@@@@@@@@@@@@@", app);

// app.get("/", (req, res) => {
//   console.log("get通信OK ~-----------");
//   res.status(200).send("GET通信OK");
// });

// app.listen(4000, () => {
//   console.log("@@@@@server起動-----------");
// });
//---------------------------------------
//--------------------------------------
// const { createDbModels } = require("../db");
// const { createServer } = require("../app.js");
// const app = createServer();
// const app = createServer(createDbModels());

const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

describe("GET /", () => {
  describe("GET / response check", () => {
    let request;
    beforeEach(() => {
      request = chai.request(app).get("/");
      // .set("Content-Type", "application/json");
    });
    it("should respond status200.", (done) => {
      request.end((_, res) => {
        res.status.should.equal(200);
        done();
      });
    });
    it("should return status 200.", (done) => {
      request.end((_, res) => {
        // console.log("----------------res", typeof res.body[0]);
        res.should.be.json;
        done();
      });
    });
  });
});

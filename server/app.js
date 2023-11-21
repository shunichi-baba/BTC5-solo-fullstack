const createServer = (db) => {
  const express = require("express");
  const app = express();
  const PORT = process.env.PORT || 3000;
  require("dotenv").config();

  //jsonオブジェクトを認識できるようになる
  //フロントaxiosからはjson形式で送られる
  app.use(express.json());

  //デプロイで必要みたい_ここにフロントのdistのパスを入れる
  app.use("/", express.static(__dirname + "../front/dist"));
  app.use("/", express.static("../front/dist"));

  //knexfile読み込んでdb接続-----------------
  // const config = require("./knexfile");
  // const knex = require("knex")(config);

  //環境変数設定----------------------------
  const knex1 = require("knex");
  const knexConfig = require("./db/knexfile");
  const environment = process.env.NODE_ENV;
  const knex = knex1(knexConfig[environment]);

  //CROSエラー回避-----------------------------
  const cors = require("cors");
  app.use(
    cors({
      origin: "http://localhost:10000",
      // origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    })
  );

  //get------------------------------------
  app.get("/diary", async (req, res) => {
    //CROSエラー回避のヘッダを追加
    //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    // console.log("@@@@@@@@@@@@@@req", req);
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
  app.post("/diary", async (req, res) => {
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
};
createServer();

module.exports = {
  createServer,
};

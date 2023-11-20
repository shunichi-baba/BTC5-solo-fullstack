const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//jsonオブジェクトを認識できるようになる
//フロントaxiosからはjson形式で送られる
app.use(express.json());

//knexfile読み込んでdb接続-----------------
const config = require("./knexfile");
const knex = require("knex")(config);

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
      //   console.log('process.env', process.env);
    });

  //   res.status(200).send('hello');
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

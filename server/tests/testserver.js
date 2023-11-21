const testserver = () => {
  const express = require("express");
  const app = express();
  // console.log("@@@@@@@@@@@@@@", app);

  app.get("/", (req, res) => {
    console.log("get通信OK ~-----------");
    res.status(200).send("GET通信OK");
  });

  app.listen(4000, () => {
    console.log("@@@@@server起動-----------");
  });
};
module.exports = { testserver };

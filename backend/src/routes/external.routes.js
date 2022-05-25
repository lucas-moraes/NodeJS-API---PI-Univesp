module.exports = (app) => {
  const externalAPI = require("../controller/external.controller.js");

  let router = require("express").Router();

  router.post("/getLocal", externalAPI.getLocal);

  app.use("/external", router);
};

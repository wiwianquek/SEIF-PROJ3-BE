const modelHello = require("../models/hello")

module.exports = {
    getHello
};

async function getHello(req, res) {
    res.json({
      hello: await modelHello.getAll(req.query),
    });
  }
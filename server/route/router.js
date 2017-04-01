var express = require("express");
var router = express.Router();

router.get('/', (req, res)=>{
  res.send("Api is working fine");
});

module.exports = router;

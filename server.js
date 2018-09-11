var express = require("express");
var app = express;



app.listen(process.env.PORT, function () {
   console.log("uygulama çalışıyor " + process.env.PORT ); 
})

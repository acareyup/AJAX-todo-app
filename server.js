let express = require ("express");
let app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res) {
    res.send("kök dizinden merhaba");
});

app.use('/api/todos', todoRoutes);



app.listen(port, function () {
   console.log("uygulama çalışıyor " + port); 
})

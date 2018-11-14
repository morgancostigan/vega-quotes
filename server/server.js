//bring express in from node_modules
const express = require('express');

//make the app //make the PORT
const app = express();
const PORT = 5000;

//create route - 
app.get('/quote', function (req, res) {
    res.send('got to /quote')
})


//listen to PORT 5000 and start server
app.listen(PORT, function(){
    console.log(`App has started on port ${PORT}`);
});


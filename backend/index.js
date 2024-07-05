const express = require('express'), app = express(), cors = require('cors'), bodyParser = require('body-parser'), userRouter = require('./routes/customer.js');
var server = {
    port: 8080
};

app.use(cors());
app.use(bodyParser.json());
app.use('/api/customer', userRouter);
app.listen(server.port, () => console.log('listening on port ' + server.port));
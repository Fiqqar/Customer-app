const express = require('express'), router = express.Router(), mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db2',
});

router.get('/list', (req, res) => {
    let query = "SELECT * FROM customer";
    db.query(query, (err, result, fields) => {
        if (err) throw err;
        res.json({
            status: 200,
            result ,
            message: "customer list obtained successfully"
        });
    });
});

router.get('/userid', (req, res) => {
    let params = req.query;
    let id = params.id; 
    let query = `SELECT * FROM customer where ID = ?`;
    let values = [id];
    db.query(query, values, (err, result) => {
        if (err) throw err;
        else {
            res.json({
                status: 200,
                result,
                message: "customer found successfully"
            });
        }
    })
    if (!id) {
        res.status(418).send({
            message: `Customer not found ${id}`
        });
    }
    if (id) {
        db.query(query, (err, result, fields) => {
            if (err) throw err;
            res.json({
                status: 200,
                result ,
                message: "customer list obtained successfully"
            });
        });
    }
});





router.post('/add', (req, res) => {
    let query = "INSERT INTO customer(first_name, last_name, phone, email, address, city, state) values(?)";
    let values = [
        req.body.first_name,
        req.body.last_name,
        req.body.phone,
        req.body.email,
        req.body.address,
        req.body.city,
        req.body.state

    ];
    db.query(query, [values], (err, result, fields) => {
        if (err) throw err;
        res.json({
            status : 200,
            message: "customer added successfully"
        });
    });
});

router.delete('/delete/:id', (req, res) => {
    item.remove
}); 




module.exports = router;
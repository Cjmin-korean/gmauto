// routes/index.jsvert
const multer = require('multer');
const xlsx = require('xlsx');
const fs = require('fs');
module.exports = function (app) {
    const sql = require('mssql');
    var config = {
        user: 'pswel1',
        password: '1234',
        server: '118.46.215.214',
        database: 'gmauto',
        options: {
            encrypt: false,
            enableArithAbort: true
        }
    };
    // **** start 
    sql.connect(config).then(pool => {
        app.post('/api/mainall', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                // .input('searchText', sql.NVarChar, req.body.searchText)
                .query(
                    "select * from main"
                )
                .then(result => {
                    res.json(result.recordset);
                    res.end();
                });

        });

    });
    // **** finish
}
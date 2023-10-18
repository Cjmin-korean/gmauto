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
        database: '초중종물-지엠오토',
        // connectTimeout: 10000,
        // stream: false,
        options: {
            encrypt: false,
            enableArithAbort: true
        }
    };
   
}
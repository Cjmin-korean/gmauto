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
    // **** start 
    sql.connect(config).then(pool => {
        app.post('/api/selectpwplan', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                // .input('searchText', sql.NVarChar, req.body.searchText)
                .query(
                    "select * from pw"
                )
                .then(result => {
                    res.json(result.recordset);
                    res.end();
                });

        });

    });
    // **** finish
    // **** start 
    sql.connect(config).then(pool => {
        app.post('/api/selectpwmain', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                // .input('searchText', sql.NVarChar, req.body.searchText)
                .query(
                    "select * from pwmain"
                )
                .then(result => {
                    res.json(result.recordset);
                    res.end();
                });

        });

    });
    // **** finish

    // **** start       
    sql.connect(config).then(pool => {
        app.post('/api/insertmain', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");


            return pool.request()
                .input('customer', sql.NVarChar, req.body.customer)
                .input('cartype', sql.NVarChar, req.body.cartype)
                .input('endpartnumber', sql.NVarChar, req.body.endpartnumber)
                .input('endcategory', sql.NVarChar, req.body.endcategory)
                .input('subpartnumber', sql.NVarChar, req.body.subpartnumber)
                .input('subpresspartnumber', sql.NVarChar, req.body.subpresspartnumber)
                .input('pressproductionlinecode', sql.NVarChar, req.body.pressproductionlinecode)
                .input('pressproductionlinename', sql.NVarChar, req.body.pressproductionlinename)
                .input('presscategory', sql.NVarChar, req.body.presscategory)
                .input('presscavity', sql.NVarChar, req.body.presscavity)
                .input('presssepartion', sql.NVarChar, req.body.presssepartion)
                .input('pressseparationpartnumber', sql.NVarChar, req.body.pressseparationpartnumber)
                .input('op10', sql.NVarChar, req.body.op10)
                .input('op10proccessname', sql.NVarChar, req.body.op10proccessname)
                .input('op10equipmentnumber', sql.NVarChar, req.body.op10equipmentnumber)
                .input('op20', sql.NVarChar, req.body.op20)
                .input('op20proccessname', sql.NVarChar, req.body.op20proccessname)
                .input('op20equipmentnumber', sql.NVarChar, req.body.op20equipmentnumber)
                .input('op30', sql.NVarChar, req.body.op30)
                .input('op30proccessname', sql.NVarChar, req.body.op30proccessname)
                .input('op30equipmentnumber', sql.NVarChar, req.body.op30equipmentnumber)
                .input('op40', sql.NVarChar, req.body.op40)
                .input('op40proccessname', sql.NVarChar, req.body.op40proccessname)
                .input('op40equipmentnumber', sql.NVarChar, req.body.op40equipmentnumber)
                .input('op50', sql.NVarChar, req.body.op50)
                .input('op50proccessname', sql.NVarChar, req.body.op50proccessname)
                .input('op50equipmentnumber', sql.NVarChar, req.body.op50equipmentnumber)
                .input('subblankingpartnumber', sql.NVarChar, req.body.subblankingpartnumber)
                .input('blankingproductionlinecode', sql.NVarChar, req.body.blankingproductionlinecode)
                .input('blankingproductionlinename', sql.NVarChar, req.body.blankingproductionlinename)
                .input('blankingcategory', sql.NVarChar, req.body.blankingcategory)
                .input('blankingcavity', sql.NVarChar, req.body.blankingcavity)
                .input('rawmaterialinformation', sql.NVarChar, req.body.rawmaterialinformation)
                .input('rawmaterialweight', sql.NVarChar, req.body.rawmaterialweight)
                .query(
                    'insert into main(customer,cartype,endpartnumber,endcategory,subpartnumber,subpresspartnumber,pressproductionlinecode,pressproductionlinename,presscategory,presscavity,presssepartion,pressseparationpartnumber,op10,op10proccessname,op10equipmentnumber,op20,op20proccessname,op20equipmentnumber,op30,op30proccessname,op30equipmentnumber,op40,op40proccessname,op40equipmentnumber,op50,op50proccessname,op50equipmentnumber,subblankingpartnumber,blankingproductionlinecode,blankingproductionlinename,blankingcategory,blankingcavity,rawmaterialinformation,rawmaterialweight)' +
                    ' values(@customer,@cartype,@endpartnumber,@endcategory,@subpartnumber,@subpresspartnumber,@pressproductionlinecode,@pressproductionlinename,@presscategory,@presscavity,@presssepartion,@pressseparationpartnumber,@op10,@op10proccessname,@op10equipmentnumber,@op20,@op20proccessname,@op20equipmentnumber,@op30,@op30proccessname,@op30equipmentnumber,@op40,@op40proccessname,@op40equipmentnumber,@op50,@op50proccessname,@op50equipmentnumber,@subblankingpartnumber,@blankingproductionlinecode,@blankingproductionlinename,@blankingcategory,@blankingcavity,@rawmaterialinformation,@rawmaterialweight)'
                )

                .then(result => {
                    res.json(result.recordset);
                    res.end();


                });
        });

    });
    // **** finish
    // **** start       
    sql.connect(config).then(pool => {
        app.post('/api/updatemain', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");


            return pool.request()
                .input('customer', sql.NVarChar, req.body.customer)
                .input('cartype', sql.NVarChar, req.body.cartype)
                .input('endpartnumber', sql.NVarChar, req.body.endpartnumber)
                .input('endcategory', sql.NVarChar, req.body.endcategory)
                .input('subpartnumber', sql.NVarChar, req.body.subpartnumber)
                .input('subpresspartnumber', sql.NVarChar, req.body.subpresspartnumber)
                .input('pressproductionlinecode', sql.NVarChar, req.body.pressproductionlinecode)
                .input('pressproductionlinename', sql.NVarChar, req.body.pressproductionlinename)
                .input('presscategory', sql.NVarChar, req.body.presscategory)
                .input('presscavity', sql.NVarChar, req.body.presscavity)
                .input('presssepartion', sql.NVarChar, req.body.presssepartion)
                .input('pressseparationpartnumber', sql.NVarChar, req.body.pressseparationpartnumber)
                .input('op10', sql.NVarChar, req.body.op10)
                .input('op10proccessname', sql.NVarChar, req.body.op10proccessname)
                .input('op10equipmentnumber', sql.NVarChar, req.body.op10equipmentnumber)
                .input('op20', sql.NVarChar, req.body.op20)
                .input('op20proccessname', sql.NVarChar, req.body.op20proccessname)
                .input('op20equipmentnumber', sql.NVarChar, req.body.op20equipmentnumber)
                .input('op30', sql.NVarChar, req.body.op30)
                .input('op30proccessname', sql.NVarChar, req.body.op30proccessname)
                .input('op30equipmentnumber', sql.NVarChar, req.body.op30equipmentnumber)
                .input('op40', sql.NVarChar, req.body.op40)
                .input('op40proccessname', sql.NVarChar, req.body.op40proccessname)
                .input('op40equipmentnumber', sql.NVarChar, req.body.op40equipmentnumber)
                .input('op50', sql.NVarChar, req.body.op50)
                .input('op50proccessname', sql.NVarChar, req.body.op50proccessname)
                .input('op50equipmentnumber', sql.NVarChar, req.body.op50equipmentnumber)
                .input('subblankingpartnumber', sql.NVarChar, req.body.subblankingpartnumber)
                .input('blankingproductionlinecode', sql.NVarChar, req.body.blankingproductionlinecode)
                .input('blankingproductionlinename', sql.NVarChar, req.body.blankingproductionlinename)
                .input('blankingcategory', sql.NVarChar, req.body.blankingcategory)
                .input('blankingcavity', sql.NVarChar, req.body.blankingcavity)
                .input('rawmaterialinformation', sql.NVarChar, req.body.rawmaterialinformation)
                .input('rawmaterialweight', sql.NVarChar, req.body.rawmaterialweight)
                .input('id', sql.Int, req.body.id)
                .query(
                    'update main set customer=@customer,cartype=@cartype,endpartnumber=@endpartnumber,endcategory=@endcategory,subpartnumber=@subpartnumber,subpresspartnumber=@subpresspartnumber,pressproductionlinecode=@pressproductionlinecode,pressproductionlinename=@pressproductionlinename,presscategory=@presscategory,presscavity=@presscavity,presssepartion=@presssepartion,pressseparationpartnumber=@pressseparationpartnumber,op10=@op10,op10proccessname=@op10proccessname,op10equipmentnumber=@op10equipmentnumber,op20=@op20,op20proccessname=@op20proccessname,op20equipmentnumber=@op20equipmentnumber,op30=@op30,op30proccessname=@op30proccessname,op30equipmentnumber=@op30equipmentnumber,op40=@op40,op40proccessname=@op40proccessname,op40equipmentnumber=@op40equipmentnumber,op50=@op50,op50proccessname=@op50proccessname,op50equipmentnumber=@op50equipmentnumber,subblankingpartnumber=@subblankingpartnumber,blankingproductionlinecode=@blankingproductionlinecode,blankingproductionlinename=@blankingproductionlinename,blankingcategory=@blankingcategory,blankingcavity=@blankingcavity,rawmaterialinformation=@rawmaterialinformation,rawmaterialweight=@rawmaterialweight where id=@id'
                )

                .then(result => {
                    res.json(result.recordset);
                    res.end();


                });
        });

    });
    // **** finish
    // **** start 
    sql.connect(config).then(pool => {
        app.post('/api/deletemain', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('id', sql.Int, req.body.id)
                .query(
                    "delete from main where id=@id"
                )
                .then(result => {
                    res.json(result.recordset);
                    res.end();
                });

        });

    });
    // **** finish
}
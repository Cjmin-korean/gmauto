// routes/index.jsvert
const multer = require('multer');
const express = require('express');
const xlsx = require('xlsx');
const fs = require('fs');
const sql = require("mssql");

module.exports = function (app) {
    const sql = require('mssql');
    // const poolConnect = pool.connect();
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
    const pool = new sql.ConnectionPool(config);

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
        app.post('/api/pwmainselect', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('cartype', sql.NVarChar, req.body.cartype)
                .query(
                    "select productnumber from  pwmain  where cartype=@cartype group by productnumber"
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
        app.post('/api/pwmainselect1', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('cartype', sql.NVarChar, req.body.cartype)
                .query(
                    "select endpartnumber from  main  where cartype=@cartype group by endpartnumber"
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
        app.post('/api/selectpressinfo', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .query(
                    "select * from  pressinfo"
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
        app.post('/api/pwmainselectsapum', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('productnumber', sql.NVarChar, req.body.productnumber)
                .query(
                    "select sapum from  pwmain  where productnumber =@productnumber "
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
        app.post('/api/selectcartype', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                // .input('searchText', sql.NVarChar, req.body.searchText)
                .query(
                    "select cartype from pwmain group by cartype order by cartype asc"
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
        app.post('/api/selectcartype1', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                // .input('searchText', sql.NVarChar, req.body.searchText)
                .query(
                    "select cartype from main group by cartype order by cartype asc"
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
        app.post('/api/selectsa', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('productnumber', sql.NVarChar, req.body.productnumber)
                .query(
                    "select sapum from pwmain where productnumber=@productnumber"
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
        app.post('/api/updatemiddle', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('dataid', sql.NVarChar, req.body.dataid)
                .input('status1', sql.NVarChar, req.body.status1)
                .input('people1', sql.NVarChar, req.body.people1)
                .query(
                    "update pw set status1=@status1,people1=@people1 where dataid=@dataid"
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
        app.post('/api/updatepeople', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('id', sql.NVarChar, req.body.id)
                .input('part', sql.NVarChar, req.body.part)
                .input('people', sql.NVarChar, req.body.people)
                .query(
                    "update people set part=@part,people=@people where id=@id"
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
        app.post('/api/updatelast', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('dataid', sql.NVarChar, req.body.dataid)
                .input('status2', sql.NVarChar, req.body.status2)
                .input('people2', sql.NVarChar, req.body.people2)
                .input('count', sql.NVarChar, req.body.count)
                .query(
                    "update pw set status2=@status2,people2=@people2,count=@count where dataid=@dataid"
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
        app.post('/api/updatemiddlework', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('dataid', sql.NVarChar, req.body.dataid)
                .input('data11', sql.NVarChar, req.body.data11)
                .input('data21', sql.NVarChar, req.body.data21)
                .input('data31', sql.NVarChar, req.body.data31)
                .input('data41', sql.NVarChar, req.body.data41)
                .input('data51', sql.NVarChar, req.body.data51)
                .input('people1', sql.NVarChar, req.body.people1)
                .input('a1', sql.NVarChar, req.body.a1)
                .input('b1', sql.NVarChar, req.body.b1)
                .input('c1', sql.NVarChar, req.body.c1)
                .input('d1', sql.NVarChar, req.body.d1)
                .input('e1', sql.NVarChar, req.body.e1)
                .input('f1', sql.NVarChar, req.body.f1)
                .input('status2', sql.NVarChar, req.body.status2)
                .query(
                    "update pwproduct set people1=@people1,data11=@data11,data21=@data21,data31=@data31,data41=@data41,data51=@data51,status='중물',status2=@status2,a1=@a1,b1=@b1,c1=@c1,d1=@d1,e1=@e1,f1=@f1 where dataid=@dataid"
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
        app.post('/api/updatelastwork', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('dataid', sql.NVarChar, req.body.dataid)
                .input('data12', sql.NVarChar, req.body.data12)
                .input('data22', sql.NVarChar, req.body.data22)
                .input('data32', sql.NVarChar, req.body.data32)
                .input('data42', sql.NVarChar, req.body.data42)
                .input('data52', sql.NVarChar, req.body.data52)
                .input('people2', sql.NVarChar, req.body.people2)
                .input('count', sql.Float, req.body.count)
                .input('a2', sql.NVarChar, req.body.a2)
                .input('b2', sql.NVarChar, req.body.b2)
                .input('c2', sql.NVarChar, req.body.c2)
                .input('d2', sql.NVarChar, req.body.d2)
                .input('e2', sql.NVarChar, req.body.e2)
                .input('f2', sql.NVarChar, req.body.f2)
                .input('status3', sql.NVarChar, req.body.status3)
                .query(
                    "update pwproduct set people2=@people2,data12=@data12,data22=@data22,data32=@data32,data42=@data42,data52=@data52,status='종물',count=@count,a2=@a2,b2=@b2,c2=@c2,d2=@d2,e2=@e2,f2=@f2,status3=@status3 where dataid=@dataid"
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
        app.post('/api/selectpwproduct', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('finish', sql.NVarChar, req.body.finish)
                .input('start', sql.NVarChar, req.body.start)

                .query(
                    "select * from pwproduct where productdate between @start and @finish "
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
        app.post('/api/selectfirstpeople', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                // .input('finish', sql.NVarChar, req.body.finish)
                // .input('start', sql.NVarChar, req.body.start)

                .query(
                    "select * from people where part='pw' order by people asc "
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
        app.post('/api/selectfirstpeople1', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()

                .query(
                    "select * from people where part='press' order by people asc "
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
        app.post('/api/selectpwproductpapaer', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('dataid', sql.NVarChar, req.body.dataid)

                .query(
                    "select * from pwproduct where dataid=@dataid "
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
        app.post('/api/selectcarnumber', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('cartype', sql.NVarChar, req.body.cartype)
                .query(
                    "select productnumber from pwmain where cartype=@cartype group by productnumber order by productnumber asc"
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
                .input('start', sql.NVarChar, req.body.start)
                .input('finish', sql.NVarChar, req.body.finish)
                .query(
                    "select " +
                    " * " +
                    " from " +
                    " pwproduct " +
                    " where productdate between @start and @finish " +
                    " order by productdate,status desc "
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
        app.post('/api/selectimg', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                // .input('searchText', sql.NVarChar, req.body.searchText)
                .query(
                    "SELECT  "+
                    "     p.customer, "+
                    "     p.cartype, "+
                    "     p.productnumber, "+
                    "     p.productname, "+
                    "     CASE "+
                    "         WHEN i.filename IS NOT NULL THEN 'Y' "+
                    "         ELSE 'N' "+
                    "     END AS has_image "+
                    " FROM "+
                    "     [gmauto].[dbo].[pwmain] p "+
                    " LEFT JOIN  "+
                    "     imgstorage i ON p.productnumber = i.filename "+
                    " GROUP BY  "+
                    "     p.customer,  "+
                    "     p.cartype,  "+
                    "     p.productnumber,  "+
                    "     p.productname, "+
                    "     i.filename;                "
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
        app.post('/api/selectpwplanmonitoring', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('plandate', sql.NVarChar, req.body.plandate)
                .query(
                    "select * from pw where plandate=@plandate order by status desc "
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
        app.post('/api/pwjisiwherepeople', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('people', sql.NVarChar, req.body.people)
                .input('start', sql.NVarChar, req.body.start)
                .input('finish', sql.NVarChar, req.body.finish)
                .query(
                    "select * from pw where people=@people and plandate BETWEEN @start AND @finish order by status desc"
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
                    "select * from pwmain order by customer,cartype asc"
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
        app.post('/api/selectmainpress', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                // .input('searchText', sql.NVarChar, req.body.searchText)
                .query(
                    "SELECT " +
                    "     m.customer, " +
                    "     m.cartype, " +
                    "     m.endpartnumber, " +
                    "     m.endcategory, " +
                    "     m.subpartnumber, " +
                    "     m.subpresspartnumber, " +
                    "     COALESCE(pi.pressinfo_count, 0) AS pressinfo_count " +
                    " FROM " +
                    "     main m " +
                    " LEFT JOIN ( " +
                    "     SELECT " +
                    "         partnumber, " +
                    "         COUNT(*)-2 AS pressinfo_count " +
                    "     FROM " +
                    "         pressinfo " +
                    "     GROUP BY " +
                    "         partnumber " +
                    " ) pi ON m.subpresspartnumber = pi.partnumber " +
                    " ORDER BY " +
                    "     m.cartype ASC;"
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
        app.post('/api/selectpeople', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                // .input('searchText', sql.NVarChar, req.body.searchText)
                .query(
                    "select * from people order by part asc"
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
        app.post('/api/selectpwmaininfo', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('productnumber', sql.NVarChar, req.body.productnumber)
                .input('sapum', sql.NVarChar, req.body.sapum)
                .query(
                    "select * from pwmain where productnumber=@productnumber and sapum=@sapum"
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
        app.post('/api/deletepwjisi', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('id', sql.Int, req.body.id)
                .query(
                    "delete from pw where id=@id"
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
        app.post('/api/updatepwjisi', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('id', sql.Int, req.body.id)
                .input('count', sql.Float, req.body.count)
                .input('people', sql.NVarChar, req.body.people)
                .input('marchine', sql.NVarChar, req.body.marchine)
                .query(
                    "update pw set people=@people,count=@count,marchine=@marchine where id=@id"
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
        app.post('/api/startproduction', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('id', sql.Int, req.body.id)
                .input('a', sql.Float, req.body.a)
                .input('b', sql.NVarChar, req.body.b)
                .input('c', sql.NVarChar, req.body.c)
                .input('d', sql.NVarChar, req.body.d)
                .input('starttime', sql.NVarChar, req.body.starttime)
                .input('status', sql.NVarChar, req.body.status)
                .query(
                    "update pw set a=@a,b=@b,c=@c,d=@d,status=@status,starttime=@starttime where id=@id"
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
        app.post('/api/finishproduction', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('id', sql.Int, req.body.id)
                .input('finalcount', sql.Float, req.body.finalcount)
                .input('finaltime', sql.NVarChar, req.body.finaltime)
                .input('status', sql.NVarChar, req.body.status)
                .query(
                    "update pw set status=@status,finalcount=@finalcount,finaltime=@finaltime where id=@id"
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
        app.post('/api/insertfilename', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");


            return pool.request()
                .input('filename', sql.NVarChar, req.body.filename)
                .query(
                    'INSERT INTO imgstorage (filename) VALUES (@filename)'
                )
                .then(result => {
                    res.json(result.recordset);
                    res.end();
                })

        });
    });
    // **** finish
    // **** start       
    sql.connect(config).then(pool => {
        app.post('/api/insertpeople', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");


            return pool.request()
                .input('people', sql.NVarChar, req.body.people)
                .input('part', sql.NVarChar, req.body.part)
                .query(
                    'INSERT INTO people (people,part) VALUES (@people,@part)'
                )
                .then(result => {
                    res.json(result.recordset);
                    res.end();
                })

        });
    });
    // **** finish
    // **** start       
    sql.connect(config).then(pool => {
        app.post('/api/deletepeople', function (req, res) {


            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()

                .input('id', sql.Int, req.body.id)
                // .input('orderstatus', sql.NVarChar, req.body.orderstatus)


                .query(
                    'delete from  people where id=@id'
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
        app.post('/api/insertimg', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");


            return pool.request()
                .input('img', sql.VarBinary, req.body.img)

                .query(
                    'insert into img(img)' +
                    ' values(@img')

                .then(result => {
                    res.json(result.recordset);
                    res.end();


                });
        });

    });
    // **** finish
    // **** start       
    sql.connect(config).then(pool => {
        app.post('/api/insertpwjisi', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");


            return pool.request()
                .input('plandate', sql.NVarChar, req.body.plandate)
                .input('customer', sql.NVarChar, req.body.customer)
                .input('cartype', sql.NVarChar, req.body.cartype)
                .input('productnumber', sql.NVarChar, req.body.productnumber)
                .input('sub', sql.NVarChar, req.body.sub)
                .input('productname', sql.NVarChar, req.body.productname)
                .input('marchine', sql.NVarChar, req.body.marchine)
                .input('touch', sql.NVarChar, req.body.touch)
                .input('sanum', sql.NVarChar, req.body.sanum)
                .input('sapum', sql.NVarChar, req.body.sapum)
                .input('sacount', sql.NVarChar, req.body.sacount)
                .input('a', sql.Float, req.body.a)
                .input('b', sql.Float, req.body.b)
                .input('c', sql.Float, req.body.c)
                .input('d', sql.Float, req.body.d)
                .input('e', sql.Float, req.body.e)
                .input('f', sql.Float, req.body.f)
                .input('count', sql.Float, req.body.count)
                .input('status', sql.NVarChar, req.body.status)
                .input('status1', sql.NVarChar, req.body.status1)
                .input('status2', sql.NVarChar, req.body.status2)
                .input('people', sql.NVarChar, req.body.people)
                .input('starttime', sql.NVarChar, req.body.starttime)
                .input('finaltime', sql.NVarChar, req.body.finaltime)
                .input('dataid', sql.NVarChar, req.body.dataid)
                .input('finalcount', sql.Float, req.body.finalcount)

                .query(
                    'insert into pw(plandate,customer,cartype,productnumber,sub,productname,marchine,touch,sanum,sapum,sacount,a,b,c,d,e,f,count,status,status1,status2,people,starttime,finaltime,finalcount,dataid)' +
                    ' values(@plandate,@customer,@cartype,@productnumber,@sub,@productname,@marchine,@touch,@sanum,@sapum,@sacount,@a,@b,@c,@d,@e,@f,@count,@status,@status1,@status2,@people,@starttime,@finaltime,@finalcount,@dataid)'
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
        app.post('/api/insertpwproduct', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");


            return pool.request()
                .input('productdate', sql.NVarChar, req.body.productdate)
                .input('customer', sql.NVarChar, req.body.customer)
                .input('cartype', sql.NVarChar, req.body.cartype)
                .input('productnumber', sql.NVarChar, req.body.productnumber)
                .input('productname', sql.NVarChar, req.body.productname)
                .input('marchine', sql.NVarChar, req.body.marchine)
                .input('touch', sql.NVarChar, req.body.touch)
                .input('sanum', sql.NVarChar, req.body.sanum)
                .input('sapum', sql.NVarChar, req.body.sapum)
                .input('sacount', sql.NVarChar, req.body.sacount)
                .input('a', sql.NVarChar, req.body.a)
                .input('b', sql.NVarChar, req.body.b)
                .input('c', sql.NVarChar, req.body.c)
                .input('d', sql.NVarChar, req.body.d)
                .input('e', sql.NVarChar, req.body.e)
                .input('f', sql.NVarChar, req.body.f)
                .input('status', sql.NVarChar, req.body.status)
                .input('data1', sql.NVarChar, req.body.data1)
                .input('data2', sql.NVarChar, req.body.data2)
                .input('data3', sql.NVarChar, req.body.data3)
                .input('data4', sql.NVarChar, req.body.data4)
                .input('data5', sql.NVarChar, req.body.data5)
                .input('t', sql.NVarChar, req.body.t)
                .input('spec', sql.NVarChar, req.body.spec)
                .input('people', sql.NVarChar, req.body.people)
                .input('dataid', sql.NVarChar, req.body.dataid)
                .input('status1', sql.NVarChar, req.body.status1)
                .input('status2', sql.NVarChar, req.body.status2)
                .input('status3', sql.NVarChar, req.body.status3)


                .query(
                    'insert into pwproduct(productdate,customer,cartype,productnumber,productname,marchine,touch,sanum,sapum,sacount,a,b,c,d,e,f,status,data1,data2,data3,data4,data5,t,spec,people,dataid,status1,status2,status3)' +
                    ' values(@productdate,@customer,@cartype,@productnumber,@productname,@marchine,@touch,@sanum,@sapum,@sacount,@a,@b,@c,@d,@e,@f,@status,@data1,@data2,@data3,@data4,@data5,@t,@spec,@people,@dataid,@status1,@status2,@status3)'
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
        app.post('/api/insertpwmain', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");


            return pool.request()
                .input('customer', sql.NVarChar, req.body.customer)
                .input('cartype', sql.NVarChar, req.body.cartype)
                .input('productnumber', sql.NVarChar, req.body.productnumber)
                .input('sub', sql.NVarChar, req.body.sub)
                .input('productname', sql.NVarChar, req.body.productname)
                .input('marchine', sql.NVarChar, req.body.marchine)
                .input('touch', sql.NVarChar, req.body.touch)
                .input('sanum', sql.NVarChar, req.body.sanum)
                .input('sapum', sql.NVarChar, req.body.sapum)
                .input('sacount', sql.NVarChar, req.body.sacount)
                .input('a', sql.NVarChar, req.body.a)
                .input('b', sql.NVarChar, req.body.b)
                .input('c', sql.NVarChar, req.body.c)
                .input('d', sql.NVarChar, req.body.d)
                .input('e', sql.NVarChar, req.body.e)
                .input('f', sql.NVarChar, req.body.f)
                .input('g', sql.NVarChar, req.body.g)
                .input('h', sql.NVarChar, req.body.h)
                .input('i', sql.NVarChar, req.body.i)
                .input('j', sql.NVarChar, req.body.j)
                .input('spec', sql.NVarChar, req.body.spec)
                .input('t', sql.NVarChar, req.body.t)


                .query(
                    " INSERT INTO pwmain (customer, cartype, productnumber, sub, productname, marchine, touch, sanum, sapum, sacount, a, b, c, d, e, f, g, h, i, j, spec, t) " +
                    " values(@customer, @cartype, @productnumber, @sub, @productname, @marchine, @touch, @sanum, @sapum, @sacount, @a, @b, @c, @d, @e, @f, @g, @h, @i, @j, @spec, @t) "
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
        app.post('/api/updatepw', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");


            return pool.request()
                .input('id', sql.Int, req.body.id)
                .input('plandate', sql.NVarChar, req.body.plandate)
                .input('customer', sql.NVarChar, req.body.customer)
                .input('cartype', sql.NVarChar, req.body.cartype)
                .input('productnumber', sql.NVarChar, req.body.productnumber)
                .input('sub', sql.NVarChar, req.body.sub)
                .input('productname', sql.NVarChar, req.body.productname)
                .input('marchine', sql.NVarChar, req.body.marchine)
                .input('touch', sql.NVarChar, req.body.touch)
                .input('sanum', sql.NVarChar, req.body.sanum)
                .input('sapum', sql.NVarChar, req.body.sapum)
                .input('sacount', sql.NVarChar, req.body.sacount)
                .input('a', sql.NVarChar, req.body.a)
                .input('b', sql.NVarChar, req.body.b)
                .input('c', sql.NVarChar, req.body.c)
                .input('d', sql.NVarChar, req.body.d)
                .input('e', sql.NVarChar, req.body.e)
                .input('f', sql.NVarChar, req.body.f)
                .input('g', sql.NVarChar, req.body.g)
                .input('h', sql.NVarChar, req.body.h)
                .input('i', sql.NVarChar, req.body.i)
                .input('j', sql.NVarChar, req.body.j)
                .input('spec', sql.NVarChar, req.body.spec)
                .input('t', sql.NVarChar, req.body.t)


                .query(
                    "update " +
                    " pw " +
                    " set " +
                    " plandate=@plandate, " +
                    " customer=@customer, " +
                    " cartype=@cartype, " +
                    " sub=@sub, " +
                    " productname=@productname, " +
                    " marchine=@marchine, " +
                    " touch=@touch, " +
                    " sanum=@sanum, " +
                    " sapum=@sapum, " +
                    " sacount=@sacount, " +
                    " a=@a, " +
                    " b=@b,  " +
                    " c=@c, " +
                    " d=@d, " +
                    " e=@e, " +
                    " f=@f, " +
                    " count=@count, " +
                    " people=@people, " +
                    " status=@status, " +
                    " status1=@status1, " +
                    " status2=@status2, " +
                    " spec=spec, " +
                    " t=@t " +
                    " where id=@id")

                .then(result => {
                    res.json(result.recordset);
                    res.end();
                });
        });

    });
    // **** finish
    // **** start       
    sql.connect(config).then(pool => {
        app.post('/api/deletepw', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");


            return pool.request()
                .input('id', sql.Int, req.body.id)



                .query(
                    "delete from pw where id = @id ")

                .then(result => {
                    res.json(result.recordset);
                    res.end();
                });
        });

    });


    // **** start       
    sql.connect(config).then(pool => {
        app.post('/api/updatepwmain', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");


            return pool.request()
                .input('customer', sql.NVarChar, req.body.customer)
                .input('cartype', sql.NVarChar, req.body.cartype)
                .input('productnumber', sql.NVarChar, req.body.productnumber)
                .input('sub', sql.NVarChar, req.body.sub)
                .input('productname', sql.NVarChar, req.body.productname)
                .input('marchine', sql.NVarChar, req.body.marchine)
                .input('touch', sql.NVarChar, req.body.touch)
                .input('sanum', sql.NVarChar, req.body.sanum)
                .input('sapum', sql.NVarChar, req.body.sapum)
                .input('sacount', sql.NVarChar, req.body.sacount)
                .input('a', sql.NVarChar, req.body.a)
                .input('b', sql.NVarChar, req.body.b)
                .input('c', sql.NVarChar, req.body.c)
                .input('d', sql.NVarChar, req.body.d)
                .input('e', sql.NVarChar, req.body.e)
                .input('f', sql.NVarChar, req.body.f)
                .input('g', sql.NVarChar, req.body.g)
                .input('h', sql.NVarChar, req.body.h)
                .input('i', sql.NVarChar, req.body.i)
                .input('j', sql.NVarChar, req.body.j)
                .input('spec', sql.NVarChar, req.body.spec)
                .input('t', sql.NVarChar, req.body.t)
                .input('id', sql.Int, req.body.id)


                .query(
                    "update pwmain set customer=@customer, cartype=@cartype, productnumber=@productnumber " +
                    " , sub=@sub, productname=@productname, marchine=@marchine, touch=@touch, sanum=@sanum, sapum=@sapum, " +
                    " sacount=@sacount, a=@a, b=@b, c=@c, d=@d, e=@e, f=@f, g=@g, h=@h, i=@i, j=@j, spec=@spec, t=@t where id=@id"
                )

                .then(result => {
                    res.json(result.recordset);
                    res.end();


                });
        });

    });
    // **** finish

    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage });

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));



    sql.connect(config).then(pool => {
        app.use(express.json());

        // CORS setup
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });

        // Image upload endpoint
        app.post('/api/insertimg', upload.single('file_give'), (req, res) => {
            const imgData = req.file.buffer;

            console.log('Received image data:', imgData.length, 'bytes');

            const request = pool.request();
            request.input('img', sql.VarBinary, imgData);

            request.query("INSERT INTO test (img) VALUES (@img)", (err, result) => {
                if (err) {
                    console.error('Error:', err);
                    res.status(500).send('Internal Server Error');
                } else {
                    console.log('Image inserted successfully');
                    res.json({ msg: 'Image uploaded successfully' });
                }
            });
        });


    }).catch(err => console.log('SQL Server Connection Error:', err));


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
    // **** start 
    sql.connect(config).then(pool => {
        app.post('/api/deletepwmain', function (req, res) {
            res.header("Access-Control-Allow-Origin", "*");
            return pool.request()
                .input('id', sql.Int, req.body.id)
                .query(
                    "delete from pwmain where id=@id"
                )
                .then(result => {
                    res.json(result.recordset);
                    res.end();
                });

        });

    });
    // **** finish
}
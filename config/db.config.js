'use strict';

const mysql = require('mysql2');

//conexão com o banco de dados mySql

const dbConn = mysql.createConnection({
    host: 'sql108.epizy.com',

    user: '	epiz_30493486',

    password: 'TeZY18CiwzpTC',

    database: 'epiz_30493486_node_mysql_crud_db'

    /* host: 'mysql24-farm10.kinghost.net',

    user:'aplicacoestest',

    password:'abcde456123',

    database: 'aplicacoestest' */

    /* host: 'localhost',

    user:'root',

    password:'',

    database: 'node_mysql_crud_db' */
});

dbConn.connect(function(err) {
    if (err) throw err;

    console.log("Banco de dados conectado!!")
});

module.exports = dbConn;
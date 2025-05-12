const sql=require("mysql");
const connection= sql.createConnection({
    host:'localhost',
    user:"root",
    password:'',
    multipleStatements: true
});

const student=[
    ['Kundan','Patil',99]
];

connection.connect(err=>{
    if(err) throw err;
    console.log("connected to sql");
    const createdatabase=`
        CREATE DATABASE IF NOT EXISTS StudentDB2;
        USE StudentDB2;
        CREATE TABLE IF NOT EXISTS Student(FNAME VARCHAR(30) PRIMARY KEY, LNAME VARCHAR(30), MARKS INT);
    `;
    connection.query(createdatabase,err=>{
        if (err) throw err;

        const insertsql=`INSERT INTO Student(FNAME, LNAME, MARKS) VALUES ?`;
        connection.query(insertsql,[student],err=>{
            if(err) throw err;
            connection.query("SELECT * FROM Student",(err,results)=>{
                if(err) throw err;
                    console.table(results);
                    connection.end();
            });
        });
    });
});
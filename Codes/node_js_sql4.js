const sql= require("mysql");

const connection=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    multipleStatements:true
});

const students=[
    ['Kundan','Patil',99]
];

connection.connect(err=>{
    if(err) throw err;
        console.log("Connected sql");
        const createdatabase=`
            CREATE DATABASE IF NOT EXISTS StudentDB3;
            USE StudentDB3;
            CREATE TABLE IF NOT EXISTS student(FNAME VARCHAR(30), LNAME VARCHAR(30), MARKS INT);
        `;
        connection.query(createdatabase,err=>{
            if(err) throw err;
            console.log("Database created");
            const insertsql=`INSERT INTO student(FNAME, LNAME, MARKS) VALUES ?`;
            connection.query(insertsql,[students],err=>{
                if(err) throw err;
                console.log("Inserted");
                    connection.query("SELECT * FROM student",(err,results)=>{
                        if(err) throw err;
                            console.table(results);
                            connection.end();
                    });
            });
        });
});
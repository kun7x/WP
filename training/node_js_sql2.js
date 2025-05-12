const sql=require("mysql");

const connection=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    multipleStatements: true
});

const students = [
  [101, 'Rahul', 'BCA', 85],
  [102, 'Anita', 'BBA', 78],
  [103, 'Karan', 'BSc', 92],
  [104, 'Sneha', 'BA', 74],
  [105, 'Vikas', 'BCom', 88]
];

connection.connect(err=>{
    if(err) throw err;
    console.log("Connected to sql");

    const setupSQL=`
        CREATE DATABASE IF NOT EXISTS StudentDB;
        USE StudentDB;
        CREATE TABLE Student(
            RollNo INT PRIMARY KEY,
            Name VARCHAR(40),
            Course VARCHAR(30),
            Marks INT
        );
    `;

    connection.query(setupSQL,err=>{
        if (err) throw err;

        const sqlInsert="INSERT INTO Student(RollNo, Name, Course, Marks) VALUES ?";
        connection.query(sqlInsert,[students],err=>{
            if (err) return err;
            connection.query("SELECT * FROM Student", (err,results)=>{
                if (err) return err;
                console.table(results);
                connection.end();
            });
        });
    });
});
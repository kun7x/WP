const mysql= require('mysql');


const connection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
});

connection.connect(err => {
    if(err) throw err;
    console.log("connection established to MySql");

    connection.query("CREATE DATABASE IF NOT EXISTS EmployeeDB", (err)=>{
        if (err) throw err;
        console.log("Database EmployeeDB created successfully");

        connection.changeUser({database: 'EmployeeDB'},(err)=>{
            if (err) throw err;
            console.log("Changed to Database EmployeeDB");

            const createTable=`
                CREATE TABLE IF NOT EXISTS Employee(
                    EID INT PRIMARY KEY,
                    ENAME VARCHAR(30),
                    DESIGNATION VARCHAR(30),
                    SALARY FLOAT
                )
            `;
            connection.query(createTable, (err)=>{
                if (err) throw err;
                console.log("table Employee created successfully");

                const Employee1=[
                    [1,'Eren','Jaeger',88.5],
                    [2,'Mikasa','Ackerman',98.5],
                    [3,'Erwin','Smith',94.5]
                ];

                const insertQuery="INSERT INTO Employee(EID, ENAME, DESIGNATION, SALARY) VALUES ?";
                connection.query(insertQuery,[Employee1], (err)=>{
                    if (err) throw err;
                    console.log("3 Entries inserted into table");

                    connection.query("SELECT * FROM Employee", (err, results)=>{
                        if (err) throw err;
                        console.log("Employee Data: ");
                        console.table(results);
                        connection.end();
                    });
                });
            });
        });
    });
});
const mysql = require('mysql');

// Enable multiple statements
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  multipleStatements: true
});

const students = [
  [101, 'Rahul', 'BCA', 85],
  [102, 'Anita', 'BBA', 78],
  [103, 'Karan', 'BSc', 92],
  [104, 'Sneha', 'BA', 74],
  [105, 'Vikas', 'BCom', 88]
];

connection.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL!");

  // Step 1: Create database and table
  const setupSQL = `
    CREATE DATABASE IF NOT EXISTS CollegeDB;
    USE CollegeDB;
    CREATE TABLE IF NOT EXISTS Students (
      RollNo INT PRIMARY KEY,
      Name VARCHAR(100),
      Course VARCHAR(50),
      Marks INT
    );
  `;

  connection.query(setupSQL, err => {
    if (err) throw err;

    // Step 2: Insert student records
    const insertSQL = "INSERT INTO Students (RollNo, Name, Course, Marks) VALUES ?";
    connection.query(insertSQL, [students], err => {
      if (err) throw err;

      // Step 3: Display records
      connection.query("SELECT * FROM Students", (err, results) => {
        if (err) throw err;
        console.table(results);
        connection.end();
      });
    });
  });
});
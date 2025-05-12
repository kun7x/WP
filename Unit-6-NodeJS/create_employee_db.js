/**
 * Node.js script to create MySQL database "EmployeeDB",
 * create "employee" table, and insert 5 employee records.
 * 
 * Usage:
 * 1. Install mysql package: npm install mysql
 * 2. Run this script: node create_employee_db.js
 */

const mysql = require('mysql');

// Create connection to MySQL server (adjust user/password as needed)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '' // Add your MySQL root password here if any
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL server:', err);
    return;
  }
  console.log('Connected to MySQL server.');

  // Create database EmployeeDB
  connection.query('CREATE DATABASE IF NOT EXISTS EmployeeDB', (err) => {
    if (err) {
      console.error('Error creating database:', err);
      connection.end();
      return;
    }
    console.log('Database EmployeeDB created or already exists.');

    // Use the database
    connection.changeUser({ database: 'EmployeeDB' }, (err) => {
      if (err) {
        console.error('Error switching to EmployeeDB:', err);
        connection.end();
        return;
      }

      // Create employee table
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS employee (
          Eid INT PRIMARY KEY,
          Ename VARCHAR(100),
          Designation VARCHAR(100),
          Salary DECIMAL(10, 2)
        )
      `;
      connection.query(createTableQuery, (err) => {
        if (err) {
          console.error('Error creating employee table:', err);
          connection.end();
          return;
        }
        console.log('Employee table created or already exists.');

        // Insert 5 employee records
        const insertQuery = `
          INSERT INTO employee (Eid, Ename, Designation, Salary) VALUES
          (1, 'Alice', 'Manager', 75000.00),
          (2, 'Bob', 'Developer', 60000.00),
          (3, 'Charlie', 'Designer', 55000.00),
          (4, 'David', 'Tester', 50000.00),
          (5, 'Eve', 'HR', 52000.00)
          ON DUPLICATE KEY UPDATE
            Ename=VALUES(Ename),
            Designation=VALUES(Designation),
            Salary=VALUES(Salary)
        `;
        connection.query(insertQuery, (err, results) => {
          if (err) {
            console.error('Error inserting employee records:', err);
          } else {
            console.log('Inserted 5 employee records successfully.');

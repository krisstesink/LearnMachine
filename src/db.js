const mysql = require('mysql');

// MySQL database configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
};

// Create a MySQL pool
const pool = mysql.createPool(dbConfig);


// Exporting functions for database operations
module.exports = {
  query: (sql, values) => {
    return new Promise((resolve, reject) => {
      pool.query(sql, values, (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results);
      });
    });
  }
};

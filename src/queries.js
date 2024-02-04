const db = require('./db.js');

module.exports = {
  createUser: async (userCode) => {
    try {
      const sql = 'INSERT INTO users (username, email) VALUES (?, ?)';
      const values = [username, email];
      await db.query(sql, values);
      return { message: 'User created successfully' };
    } catch (error) {
      throw new Error('Failed to create user');
    }
  },
  
  getUsers: async () => {
    try {
      const sql = 'SELECT * FROM users';
      const users = await db.query(sql);
      return users;
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  },

  createTable: async() => {
    try {
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS key_value_pairs (
        id VARCHAR(255) PRIMARY KEY,
        value1 VARCHAR(255),
        value2 VARCHAR(255),
        value3 VARCHAR(255),
        value4 VARCHAR(255),
        value5 VARCHAR(255)
        )`; 

      db.query(createTableQuery)
      .then(result => {
        console.log('Table created successfully:', result);
      })
      .catch(error => {
        console.error('Error creating table:', error);
      });  
    } catch (error) {
      throw new Error('failed to create table', error)
    }
  },
  addEntry: async (key, valuesArray) => {
  try {
    const insertEntryQuery = `
      INSERT INTO key_value_pairs (id, value1, value2, value3, value4, value5)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    await db.query(insertEntryQuery, [key, ...valuesArray]);
    console.log('Entry added successfully');
  } catch (error) {
    console.error('Error adding entry:', error);
    throw new Error('Failed to add entry');
  }
},

  initializeSurveyTable: async () => {
    try {
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS survey_data (
          user_code VARCHAR(255) PRIMARY KEY,
          answer_0 VARCHAR(255),
          answer_1 VARCHAR(255)
          -- Add more columns if needed
        )`;

      await db.query(createTableQuery);
      console.log('Survey data table created successfully');
    } catch (error) {
      console.error('Error creating survey data table:', error);
      throw new Error('Failed to create survey data table');
    }
  },

  addSurvey: async (userCode, q0, q1) => {
    try {
      // Check if the user exists
      const checkUserQuery = 'SELECT * FROM survey_data WHERE user_code = ?';
      const userExists = await db.query(checkUserQuery, [userCode]);

      if (userExists.length === 0) {
        // If the user does not exist, create an entry
        const createSurveyEntryQuery = 'INSERT INTO survey_data (user_code, answer_0, answer_1) VALUES (?, ?, ?)';
        await db.query(createSurveyEntryQuery, [userCode, q0, q1]);
      } else {
        // If the user exists, update the survey answers
        const updateSurveyQuery = 'UPDATE survey_data SET answer_0 = ?, answer_1 = ? WHERE user_code = ?';
        await db.query(updateSurveyQuery, [q0, q1, userCode]);
      }

      console.log('Survey data added successfully');
    } catch (error) {
      console.error('Error adding survey data:', error);
      throw new Error('Failed to add survey data');
    }
  },

createHoursTable: async () => {
    try {
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS user_hours (
        user_id INT PRIMARY KEY,
        hours_spent FLOAT
        )`;

      await db.query(createTableQuery);
      console.log('Hours table created successfully');
    } catch (error) {
      console.error('Error creating hours table:', error);
      throw new Error('Failed to create hours table');
    }
  },

  addHours: async (userId, hoursToAdd) => {
    try {
      // Check if the user exists
      const checkUserQuery = 'SELECT * FROM user_hours WHERE user_id = ?';
      const userExists = await db.query(checkUserQuery, [userId]);

      if (userExists.length === 0) {
        // If the user does not exist, create an entry
        const createUserEntryQuery = 'INSERT INTO user_hours (user_id, hours_spent) VALUES (?, ?)';
        await db.query(createUserEntryQuery, [userId, hoursToAdd]);
      } else {
        // If the user exists, update the hours
        const updateHoursQuery = 'UPDATE user_hours SET hours_spent = hours_spent + ? WHERE user_id = ?';
        await db.query(updateHoursQuery, [hoursToAdd, userId]);
      }

      console.log('Hours added successfully');
    } catch (error) {
      console.error('Error adding hours:', error);
      throw new Error('Failed to add hours');
    }
  }
};
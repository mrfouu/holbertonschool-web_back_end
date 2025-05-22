const express = require('express');
const fs = require('fs');

const app = express();
const database = process.argv[2];

function getStudentsData(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const students = lines.slice(1);
      const fields = {};
      let total = 0;
      for (const student of students) {
        const parts = student.split(',');
        if (student.trim() !== '' && parts.length >= 4) {
          const firstname = parts[0].trim();
          const field = parts[3].trim();
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
          total += 1;
        }
      }
      let output = `Number of students: ${total}\n`;
      Object.entries(fields).forEach(([field, names]) => {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      });
      resolve(output.trim());
    });
  });
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.type('text/plain');
  getStudentsData(database)
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch(() => {
      res.status(500).send('This is the list of our students\nCannot load the database');
    });
});

app.listen(1245);

module.exports = app;
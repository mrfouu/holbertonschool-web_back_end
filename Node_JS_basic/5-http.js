const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    countStudents(database)
      .then(() => {
        try {
          const data = fs.readFileSync(database, 'utf8');
          const lines = data.split('\n').filter((line) => line.trim() !== '');
          const students = lines.slice(1);
          const fields = {};
          let total = 0;
          for (const student of students) {
            const parts = student.split(',');
            if (
              student.trim() !== ''
              && parts.length >= 4
            ) {
              const firstname = parts[0].trim();
              const field = parts[3].trim();
              if (!fields[field]) fields[field] = [];
              fields[field].push(firstname);
              total += 1;
            }
          }
          res.write(`Number of students: ${total}\n`);
          Object.entries(fields).forEach(([field, names]) => {
            res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
          });
          res.end();
        } catch (err) {
          res.end('Cannot load the database');
        }
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
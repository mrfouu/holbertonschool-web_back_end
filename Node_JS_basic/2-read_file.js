const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1);
    const fields = {};
    let total = 0;

    for (const student of students) {
      if (student.trim() !== '') {
        const parts = student.split(',');
        if (parts.length >= 4) {
          const firstname = parts[0].trim();
          const field = parts[3].trim();
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
          total += 1;
        }
      }
    }

    console.log(`Number of students: ${total}`);
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
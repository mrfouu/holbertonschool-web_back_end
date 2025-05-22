import fs from 'fs';

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      const fields = {};
      for (const student of students) {
        const parts = student.split(',');
        if (student.trim() !== '' && parts.length >= 4) {
          const firstname = parts[0].trim();
          const field = parts[3].trim();
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
        }
      }
      resolve(fields);
    });
  });
}
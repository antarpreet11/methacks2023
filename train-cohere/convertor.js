const fs = require('fs');

// Read the explanations.json file
const jsonData = fs.readFileSync('explanations.json', 'utf8');
const data = JSON.parse(jsonData);

// CSV string
let csv = '';

// Process each explanation
Object.entries(data).forEach(([slug, explanation]) => {
  // Set the label based on the slug
  let label = '';

  if (slug.includes('two-sum')) {
    label = 'right';
  } else {
    label = 'wrong';
  }

  // Append to the CSV string
  csv += `"${explanation.replace(/"/g, '""')}"; ${label}\n`;
});

// Write CSV to a file
fs.writeFileSync('output.csv', csv);
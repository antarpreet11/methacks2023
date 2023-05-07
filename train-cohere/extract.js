const fs = require('fs');
const readline = require('readline');

const jsonlFilePath = './leetcode-solutions.jsonl';

const specifiedSlugs = [ "two-sum", "median-of-two-sorted-arrays",  "longest-substring-without-repeating-characters",  "reverse-integer",  "valid-parentheses",  "merge-intervals",  "word-search",  "binary-tree-maximum-path-sum",  "course-schedule",  "longest-palindromic-substring",  "decode-ways"];
const explanations = {};

const jsonlString = fs.readFileSync(jsonlFilePath, 'utf8');
const jsonLines = jsonlString.split('\n');

jsonLines.forEach((jsonLine, index) => {

    const lineWithoutNewline = jsonLine.replace(/\n/g, '');
    
    if (lineWithoutNewline.trim() === '') {
      // Skip empty lines
      return;
    }
  
    try {
      const jsonObject = JSON.parse(lineWithoutNewline);
      const newJsonObj = removeNewlinesFromObject(jsonObject);
      const { slug, answer } = newJsonObj;

      if (specifiedSlugs.includes(slug)) {
        explanations[slug] = answer.explanation;
      }
      // Perform additional operations on the object as needed
    } catch (error) {
      console.error(`Error parsing object ${index + 1}:`, error);
    }
});

function removeNewlinesFromObject(obj) {
    if (typeof obj === 'string') {
      return obj.replace(/\n/g, '');
    } else if (typeof obj === 'object' && obj !== null) {
      for (let key in obj) {
        obj[key] = removeNewlinesFromObject(obj[key]);
      }
    }
    return obj;
}

fs.writeFileSync('explanations.json', JSON.stringify(explanations, null, 2));
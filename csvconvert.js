const csv = require('csv-tools');
const fs = require('fs');
const path = require('path');

csv.fileToJSON('customer-data.csv', function(json) {
	fs.writeFile('customer-data.json', JSON.stringify(json, fixNewLineChar, 4), () => {
		console.log('File Converted');
	});
});

let fixNewLineChar = (key, value) => typeof(value) === 'string' ? value.replace('\r', '') : value;

const csv = require('csv-tools');
const fs = require('fs');
const path = require('path');

csv.fileToJSON('customer-data.csv', function(json) {
	fs.writeFileSync(path.join(__dirname, 'export', 'data.json'), JSON.stringify(json));
});

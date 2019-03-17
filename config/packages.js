const fs = require('fs');
const path = require('path');


const packagesPath = path.resolve(__dirname, '../packages');
const packages = fs.readdirSync(packagesPath);

const entries = packages.map(p => {
  let entry = require(path.resolve(__dirname, `../packages/${p}/index.js`));
  return {
    path: `/${p}`,
    entry: entry.toString()
  }
});

module.exports = entries;

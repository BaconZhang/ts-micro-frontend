const path = require('path');
const fs = require('fs');

const root = path.resolve(__dirname, '../packages');

const getPackages = () => fs.readdirSync(root, { withFileTypes: true })
  .filter(i => i.isDirectory())
  .map(i => i.name);

module.exports = {
  getPackages,
  root
}
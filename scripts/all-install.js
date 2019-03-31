const child_process = require('child_process');
const { getPackages, root } = require('./lib');
const path = require('path');

const packages = getPackages();
console.log('all install start...');
Promise.all(packages.map(name => {
  const realPath = path.resolve(root, name);
  child_process.exec(`cd ${realPath} && npm install`);
})).then(() => {
  console.log('all install success');
}).catch(err => {
  console.log("all install err: ", err);
});
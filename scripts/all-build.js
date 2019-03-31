const child_process = require('child_process');
const { getPackages, root } = require('./lib');
const path = require('path');

const packages = getPackages();
console.log('all build start...');
Promise.all(packages.map(name => {
  const realPath = path.resolve(root, name);
  child_process.exec(`cd ${realPath} && npm run build`);
})).then(() => {
  console.log('all build success');
}).catch(err => {
  console.log("all build err: ", err);
});
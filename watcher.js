const fs = require('fs');
const spawn = require('child_process').spawn;

const fileName = process.argv[2]; // node watcher.js filename.md

if (!fileName) {
  throw Error('Invalid file name');
}

fs.watch(fileName, () => {
  console.log('file changed')
});

console.log(`Now watching ${fileName}...`);

fs.readFile(fileName, function (err, data){
  if (err) {
    throw err;
  }
  console.log(data.toString());
});
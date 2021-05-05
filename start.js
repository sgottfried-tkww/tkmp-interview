const { join } = require('path');
const fs = require('fs');
const rimraf = require("rimraf");

const path = join(__dirname, 'packages/server/.build');

if (fs.existsSync(path)) {
  rimraf.sync(path);
}

const assert = require('assert');
const crypto = require('crypto');

function main() {
  const pvt = crypto.randomBytes(32); // 256-bit, same as Bitcoin
  console.log(pvt);
}

main();

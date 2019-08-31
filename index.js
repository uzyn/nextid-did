const assert = require('assert');
const crypto = require('crypto');
const util = require('./util');


function toBitcoin(nextPvt) {
  const privateKey = util.down32(nextPvt);
  const ecdh = crypto.createECDH('secp256k1')
  ecdh.setPrivateKey(privateKey);
  const publicKey = ecdh.getPublicKey();
  console.log(publicKey.
  return {
    publicKey,
    privateKey,
  }
}

function main() {
  const nextPvt = crypto.randomBytes(64); // 64 bytes => 512-bit
  console.log(nextPvt);
  console.log(toBitcoin(nextPvt));
}

main();

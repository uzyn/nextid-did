const assert = require('assert');
const crypto = require('crypto');

const ecdh = crypto.createECDH('secp256k1')

function toBitcoin(nextPvt) {
  console.log(ecdh.setPrivateKey(nextPvt));
  console.log(ecdh.getPrivateKey());
  console.log(ecdh.getPublicKey());
  return {
    public: '1xxxxxxx',
    private: 'oaidjfoiajsdoifjadsf',
  }
}

function main() {
  const nextPvt = crypto.randomBytes(32); // 64 bytes => 512-bit
  console.log(nextPvt);
  console.log(toBitcoin(nextPvt));
}

main();

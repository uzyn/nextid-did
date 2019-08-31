const crypto = require('crypto');

function sha256(data) {
  const hash = crypto.createHash('sha256');
  hash.update(data);
  return hash.digest();
}

function down32(data) {
  if (data.length < 32) {
    throw new Error('Buffer length is less than target');
  } else if (data.length === 32) {
    return data;
  }

  return sha256(data);
}

module.exports = { sha256, down32 };

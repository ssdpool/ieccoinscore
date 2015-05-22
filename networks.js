var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('eba0d6cb'),
  addressVersion: 0x66,
  privKeyVersion: 230,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('0FBDA79C3684111A073F9976AD7209A68DA918BE364BE89258E042E736B1A4C7'),
    merkle_root: hex('DDA34F6C613C6B2494DD24750398631E7908593B714C9836BC608B1214426383'),
    height: 0,
    nonce: 1128005,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1420074000,
    bits: 504365040,
  },
  dnsSeeds: [
    '149.210.165.149',
	'ivugeoevolutioncoinseednode.com',
	'37.157.199.129',
	'37.157.199.104',
	'37.187.144.36'
  ],
  defaultClientPort: 10334
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('1cd7f002'),
  addressVersion: 0x41,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('6B789770FB20A0262C18A35675A06450BB850CEB281A95A046B5E0D10438BE36'),
    merkle_root: hex('D8E288A08F808F7472B37BD13A3575522AD13D84E019746B24565D46A81B52D8'),
    height: 0,
    nonce: 2954005045,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1417037345,
    bits: 503840767,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 110334
};

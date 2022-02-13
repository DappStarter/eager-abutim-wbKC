require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone stock raise still minor honey light army gaze'; 
let testAccounts = [
"0xaaf3604a4abc26d87d57392afdee5416aa741e97a9603df26faa5e02dbc38171",
"0x7bdf2bdc7acce18484e56da7f75e42be8203a6b53b5c3377d63df008c79a1ed7",
"0xee700c31e74e6830d8f1cf80f561c8d9654855954493ef21b12a3f79a7c0328e",
"0xf80a2fd2c17662fdd1750b65dc158337b1ba80a035e9b0773eb3b16d3c2c4b75",
"0x1a0b93d4d3d8da5b14d3c249072b6e21616929be516c7969811d4f2072263813",
"0xf13c86a8e8c01c97323552fc0e2125bf0f45b12e8d1fd4f44ae60c6f794bb514",
"0x3746339b25f84d8a392d6c700e6c59460b803f9261b7de7393f2c52ca7b42d83",
"0x7ba1aaabcf21af516d306c68fc089c7d4d446ccee6e9259d18b88bc483d82b33",
"0xfe1714048253e7219037f4f73ec3455974e8ab032ed2c9a6a7cd48ccff035eae",
"0x75484f2e50c7a17d244e0366427e0431ed8a1556a8ab5ea58f2fe15b39bd30ee"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


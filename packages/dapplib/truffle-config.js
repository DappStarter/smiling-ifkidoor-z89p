require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note pitch sniff harvest casino swift topple'; 
let testAccounts = [
"0xefb37ab0413606d769be512bf45f10a5e4d0bd942b8a9e92b2646cd1830255ee",
"0x85887545cdd2177cd12c0fbd802b81d1259a720b2ec0f493aac8cb76abf0d3e7",
"0xbb10222298fdb128b90b54a13f5cded10cb9e8da0e45df1018ab50aeed43be56",
"0x692b6388101d82d374256c3eec6bd7eaa5189630d7e5c3f6256037682c13f42e",
"0x7ff110a5af1595c1e1edf78d7cbdac1cd4a3f4213a65628e887d37e50b4c3aca",
"0x91fdaf0c32108f6a0cfbdcf730b2f6bfff3213b494b8f560b2dd873108e271cd",
"0x9863522a464a00c194f02ba1c4a89d3df3cae1d117534ec47f59ee2749a5bb79",
"0x181446fd07fab51d7e59c0edecbf45375f4ba4893f66ba135713b99c4cfbc103",
"0xc3c82a810fdc584ab40de3ada35e5d136cf80964920905e44e5f95c247589b54",
"0x22760b557bc976bd17c28a336439b4478317b256b546350ad7b5ce10fbe145c6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



module.exports = {
    runebase: {
        messagePrefix: '\x15Runebase Signed Message:\n',
        bech32: 'rune',
        bip32: {
            public: 0x0586c22e,
            private: 0x0586dcf1
        },
        pubKeyHash: 0x3c,
        scriptHash: 0x7b,
        wif: 0xd8
    },
    runebase_testnet: {
        messagePrefix: '\x15Runebase Signed Message:\n',
        bech32: 'trun',
        bip32: {
            public: 0x053782bf,
            private: 0x053784a4
        },
        pubKeyHash: 0x0b,
        scriptHash: 0x6a,
        wif: 0xe5
    }
}

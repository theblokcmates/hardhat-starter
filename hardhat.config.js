require('dotenv').config()
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  gasReporter: {
    enabled: false
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  networks: {
    goerli: {
      accounts: [process.env.PRIVATE_KEY],
      url: process.env.GOERLI_RPC_URL
    },
    sepolia: {
      accounts: [process.env.PRIVATE_KEY],
      url: process.env.SEPOLIA_RPC_URL
    },
    mumbai: {
      accounts: [process.env.PRIVATE_KEY],
      url: process.env.MUMBAI_RPC_URL
    },
    hardhat: {
      accounts: {
        accountsBalance: '100000000000000000000'
      }
    },
  }
};

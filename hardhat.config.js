require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()


module.exports = {
  solidity: "0.8.17",
  networks: {
    kairos: {
      url: process.env.KAIROS_TESTNET_URL || "",
      gasPrice: 250000000000,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }
  }
};

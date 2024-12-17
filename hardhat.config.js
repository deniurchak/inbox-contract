require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { INFURA_ENDPOINT, MNEMONIC } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.4.17",
  networks: {
    sepolia: {
      url: `${INFURA_ENDPOINT}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
  },
};

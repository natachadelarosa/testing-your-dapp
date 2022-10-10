require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config()

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();
  
	for (const account of accounts) {
	  console.log(account.address);
	}
  });

module.exports = {
	solidity: "0.8.9",
	networks: {
		hardhat: {},
		ETH_MAINNET: {
			accounts: process.env.PRIVATE_KEY ? [`${process.env.PRIVATE_KEY}`] : [],
			url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
		},
		ETH_GOERLI: {
			accounts: process.env.PRIVATE_KEY ? [`${process.env.PRIVATE_KEY}`] : [],
			url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
		}
	},
	etherscan: {
		apiKey: `${process.env.ETHERSCAN_API_KEY}`
	}
}
const hre = require("hardhat");

async function main() {
	const Contract = await hre.ethers.getContractFactory("MyNFTToken");

	const _name='MyNFTToken';
 	const _symbol='MYC';
	
	const contract = await Contract.deploy(_name, _symbol);

	await contract.deployed();

	console.log("MyNFTToken deployed to:", contract.address);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
import styles from "../../styles/Panel.module.css";
import { usePrepareContractWrite, useContractWrite, useAccount} from 'wagmi'
import MyNFTTokenAbi from './abi.json'


export const Panel = () => {
	const { address } = useAccount()

	  const { config } = usePrepareContractWrite({
		addressOrName: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
		contractInterface: MyNFTTokenAbi,
		functionName: 'mintTo',
		args: address,
	  })

	  const { data, isLoading, isSuccess, write } = useContractWrite(config)

	  const handleMint = async () => {
		await write()
	  }
	  

	return (
		<div className={styles.panel_container}>
			<div className={styles.panel}>
				<div className={styles.box}>
					<h2>Mint token</h2>
					<p>
						Mint a token for you
					</p>
					<div className={styles.button_container}>
					<button  className={styles.button} disabled={!write} onClick={handleMint}>
						Mint
					</button> 
					</div>
				</div>
				<div className={styles.box}>
					<h2>Learn Web3</h2>
					<p>
						Become a web3 developer in 10 weeks completely for free
						joining the Road to Web3 bootcamp! Learn by the best in
						class.
					</p>
					<div className={styles.button_container}>
						<a
							className={styles.button}
							target="_blank"
							href="https://docs.alchemy.com/docs/welcome-to-the-road-to-web3"
						>
							Let's Go
						</a>
					</div>
				</div>
			</div>
			<div className={styles.panel}>
				<div className={styles.box}>
					<h2>Become a contributor</h2>
					<p>
						Help building create-web3-dapp, visit the docs and start
						contributing towards the most used dapp building CLI
						tool!
					</p>
					<div className={styles.button_container}>
						<a
							className={styles.button}
							target="_blank"
							href="https://github.com/Eversmile12/create-web3-dapp/blob/main/contributing.md"
						>
							Let's Go
						</a>
					</div>
				</div>
				<div className={styles.box}>
					<h2>Create an Alchemy Account</h2>
					<p>
						Create a free Alchemy account and start building dapps
						like the big do. get your acount
					</p>
					<div className={styles.button_container}>
						<a
							className={styles.button}
							target="_blank"
							href="https://alchemy.com/?a=create-web3-dapp"
						>
							Let's Go
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

import {useState} from "react"
import {useAddress,useBalance,useUser} from "@thirdweb-dev/react"
import Header from '../components/header2';
import NFTS from "../components/nfts";
import styles from "../styles/Home.module.css";
import Transactions from "../components/transactions";
import Tokens from "../components/tokens";

const Wallet = () => {

let {user}=useUser()	

const [networks,setNetworks]=useState("mumbai")
const address=useAddress()
const balance=useBalance()





	return (
		<div className={styles.container}>
		
			<div className="">
				<Header></Header>
				 <h1>User : {user?.address}</h1>
      <h2 style={{color:"tomato"}}>{balance.data?.displayValue}</h2><i>{balance.data?.name}</i>
				
				<section className="">
					
					<div className="container">
						<label>select network</label><br/>
						<select className="" onChange={(e)=>setNetworks(e.target.value)}>
        <option value="mumbai">Mumbai</option>
								<option value="ethereum mainnet">Ethereum Mainnet</option>
						</select>
						<div className="">
						    
									
						
						</div>
						<div className="row">
							<div className="col">
								<h1>NFTS</h1>
							<NFTS address={address} chain={networks} />

							</div>
							<div className="col">
								<h1>Transanctions</h1>
								<Transactions  address={address} chain={networks}/>
							</div>
							<div className="col">
								<h1>Tokens</h1>
								<Tokens  address={address} chain={networks}/>
							</div>

						</div>
						
					
					</div>
				</section>
			</div>
		</div>
	);
};

export default Wallet;

import {useState} from "react"
import {useAddress,useBalance,useUser} from "@thirdweb-dev/react"
import Header from '../components/header2';
import NFTS from "../components/nfts";
import styles from "../styles/Home.module.css";

const Wallet = () => {

let {user}=useUser()	

const [transactions,setTransactions]=useState("")
const [tokens,setTokens]=useState("")
const [networks,setNetworks]=useState("mumbai")
const address=useAddress()
const balance=useBalance()



async function getTransactions(){

	let request=await fetch(`/api/transactions?address=${address}&chain=mumbai`,{
		method:"get",
		headers:{

			"content-type":"application/json"
		}
	})
	let response=await request.json()
	console.log(response)
 setTransactions(response)

}
console.log(balance)


async function getTokens(){

	let request=await fetch(`/api/token2?address=${address}&chain=mumbai`,{
		method:"get",
		headers:{

			"content-type":"application/json"
		}
	})
	let response=await request.json()
	console.log(response)
 setTokens(response)

}







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
						    
											<button onClick={()=>getNFTs()} className="">nfts</button>
											<button onClick={()=>getTransactions()} className="">transactions</button>
											<button onClick={()=>getTokens()} className="">tokens</button>
						
						</div>
						<div className="row">
							<div className="col">
								<h1>NFTS</h1>
							<NFTS address={address} chain={networks} />

							</div>
							<div className="col">
								<h1>Transanctions</h1>
							</div>
							<div className="col">
								<h1>Tokens</h1>
							</div>

						</div>
						
					
					</div>
				</section>
			</div>
		</div>
	);
};

export default Wallet;

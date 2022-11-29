import NFTS from "../components/nfts";
import { useState } from "react";
import { useAddress } from "@thirdweb-dev/react";
import Header from "../components/header"



export default function createListing(){

const address=useAddress()
const [networks,setNetworks]=useState("mumbai")



return (

 <div>
  <Header></Header>
  <label>select network</label><br/>
						<select className="" onChange={(e)=>setNetworks(e.target.value)}>
        <option value="mumbai">Mumbai</option>
								<option value="ethereum mainnet">Ethereum Mainnet</option>
						</select>
<NFTS  address={address} chain={networks}/>

 </div>
)




}
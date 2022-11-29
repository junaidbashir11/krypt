
import {useContract,ThirdwebNftMedia} from "@thirdweb-dev/react"
import { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/header2"

export default function Marketplace(){

  let router=useRouter()
  const [listing,setListings]=useState("")
  const { contract:marketplace } = useContract("0xeF75DaeCD0a7484B90E7Ba6B2C3Ee10ad0c5494f","marketplace")
  

  async function getlistings(){

  const listings = await marketplace?.getActiveListings();
  setListings(listings)
  console.log(listings)
  
  }

getlistings()


async function buy(listingId){
  await marketplace.direct.buyoutListing(listingId,1);
  router.reload()
}

return (



 <div>
		<Header></Header>
    <section className="">
  <div className="">
   
    <h1>MarketPlace</h1>
    {
    listing !==""?
    
    <div className="d-flex flex-row bd-highlight mb-3">
    <center>
    {listing?.map((obj)=>(

<div className="">


<div class="">
        </div>
        <div class="">
            <div class="card text-white bg-warning">
                <div class="card-body">
                    <h3 class="card-title">Hello</h3>
                    <ThirdwebNftMedia
              key={obj.asset.id}
              metadata={obj.asset}
              height={300}
              width={300}
            />
<p className="badge bg-dark">{obj.buyoutCurrencyValuePerToken.displayValue}</p><br/>  
<p className="badge bg-dark">{obj.buyoutCurrencyValuePerToken.symbol}</p>   
 <button onClick={()=>buy(obj.id)} className="btn btn-outline-light">Buy</button> 
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div>





        
</div>

 ))}

    </center>
  
    </div>
    :
    <>
    <p>Loading .......</p>
    </>
    
    
    
    }
            
  </div>
  </section>

 </div>
)





}
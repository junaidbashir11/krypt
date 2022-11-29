import NFTS from "../components/nfts"
import { useAddress } from "@thirdweb-dev/react"

export default function Test(){


//let address=useAddress()
let chain="mumbai"

return (

 <div>
  <NFTS chain={chain} />

 </div>
)

}
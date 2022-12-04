import { ConnectWallet ,useLogout} from "@thirdweb-dev/react";
import Link from "next/link"
import {useRouter} from "next/router"

export default function Header(){
const logout=useLogout()
let router=useRouter()
function logoutaction(e){
  
//e.preventDefault()
//router.push("/")
logout

}
 return (
  <div>

  
<div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        
        <span className="fs-4">KRYPT</span>
      </a>

      <ul className="nav nav-pills">
        
        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        <li className="nav-item"><ConnectWallet
          auth={{
            loginOptional: false,
          }}
        /></li>
      <li className="nav-item"><button className="nav-link" onClick={(e)=>logoutaction(e)}>Logout</button></li>
      <li className="nav-item"><a href="/createlisting" className="nav-link">create Listing</a></li>
      </ul>
    </header>
  </div>

  </div>
 )
}
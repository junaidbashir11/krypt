import { useLogout } from "@thirdweb-dev/react";
import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";



export default function Header(){




 return (
  <div>

  
<div className="container ">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        
        <span className="fs-4">Krypt</span>
      </a>

      <ul className="nav nav-pills">
      
      <li className="nav-item"><Link href="/marketplace" className="nav-link">Shop</Link></li>
        <li className="nav-item"><Link href="/mint" className="nav-link">Create</Link></li>
        <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        <li className="nav-item"><ConnectWallet/></li>
      </ul>
    </header>
  </div>

  </div>
 )
}
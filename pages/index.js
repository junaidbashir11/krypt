import { useUser } from "@thirdweb-dev/react";

import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Image from "next/image"
const Home = () => {
  const { user } = useUser();

  return (
    <div className="container">
    
      <div className="">
      <Header></Header>
        <div className="row">
          <div className="col">
              
              <div className="card">
                <div className="card-body">
                    <h1>KRYPT</h1>
                    <picture>

                      <Image src="/video-calling.png" width={300} height={300}></Image>
                    </picture>
                </div>
              </div>

          </div>
          <div className="col">

          <div className="">

            <div className="row">1</div>
            <div className="row">2</div>
            <div className="row">3</div>
            <div className="row">4</div>
            <div className="row">5</div>

          </div>

          </div>
          </div>
      </div>
      
    </div>
  );
};


export default Home;

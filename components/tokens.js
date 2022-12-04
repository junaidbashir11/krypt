import useSWR from "swr";
import {useState} from "react"
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Tokens(props){

 const { data, error } = useSWR(
  `/api/token2?address=${props.address}&chain=${props.chain}`,
  fetcher
);


if (error) return  "An error has occurred.";
if (!data)  return "Loading...";



return (
 <div>

<p>{JSON.stringify(data,null,2)}</p>

  </div>

)

}
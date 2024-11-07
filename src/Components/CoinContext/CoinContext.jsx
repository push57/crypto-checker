import { createContext,useEffect,useState } from "react";

export const CoinContext = createContext();

const coinContextProver = ({children}) =>{

  const [allCoin,setAllCoin] = useState([]);
    const [currency,setCurrency]= useState({name : "usd", symbol : "$"})
  

    const fetchAllCoin = async () => {
      const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-7XWNxx9BG3qFbQDotfYqhMKj'}
      };
      
      try{
        const response= await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options
        );
        const data = await response.json();
        setAllCoin(data)
      }catch(err){
        console.error("Error feching data:", err)
      }
    };
      useEffect(() => {
        fetchAllCoin();
      },[currency])

  return <CoinContext.Provider value={{allCoin,currency,setCurrency}}>
    {children}
  </CoinContext.Provider>
}

export default coinContextProver;
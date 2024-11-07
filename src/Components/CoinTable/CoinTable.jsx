import React, {useContext,useState,useEffect} from 'react'
import './CoinTable.css'
import Navbar from '../Navbar/Navbar'
import { CoinContext } from '../CoinContext/CoinContext'

const CoinTable = () => {

  const {allCoin,currency} = useContext(CoinContext);
  const [displayCoin,setDisplayCoin] = useState([]);
  const [input,setInput] =useState('');

  const handleInput = (event) => {
    setInput (event.target.value);
    if(event.target.value === ""){
      setDisplayCoin(allCoin);
    }
  }

  useEffect (() => {
setDisplayCoin(allCoin);
  }, [allCoin])
  return (
    <div>
      <div className="coin_table">
        <div className="hero_cointainer">
          <Navbar/>
         <div className="hero">
          <h1>Your Gateway to the Latest Crypto Price Trends<br/></h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <form>
            <input type="text" placeholder='Search Crypto' required/>
             <button type="submit">Search</button>
          </form>
         </div>
        </div>
        <div className="crypto_table">
          <div className="table_layout">
            <p>Rank</p>
            <p>Coins</p>
            <p>Symbol</p>
            <p>Current Price</p>
            <p>Price Change</p>
            <p >Market Cap</p>
          </div>
          {
            displayCoin.slice(0,12).map((item,index) =>(
              <div className="table_layout" key={index}>
                <p>{item.market_cap_rank}</p>
                <div>
                  <img src={item.image} alt=""/>
                  <p>{item.name}</p>
                  </div>
                  <p className='symbol'>{item.symbol}</p>
                  <p>{item.current_price}</p>
                  <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>{item.price_change_percentage_24h}%</p>
                  <p>{currency.symbol}{item.market_cap}</p>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CoinTable
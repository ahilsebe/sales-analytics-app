import logo from './logo.svg';
import './App.css';


import axios from 'axios';
import React, {useState, useEffect} from 'react';
import lineData  from './data/lineData'
//import { set } from 'core-js/core/dict';
// import BarChart from './components/BarChart';


//charts
import SankeyChart from './charts/sankeyChart';
import SalesChart from './charts/lineChart';
// import AreaRechartComponent from './charts/nivoBar';
import TinyLineRechartComponent from './charts/tinyLine';
import TreemapChart from './charts/TreemapChart';

import LINKChart from './charts/LINKChart'

function App() {

  //console.log(lineData);
  

//code here

//react hook for lineData



// //trading crpytoPrice api


//hooks
const initialcrpytoPrice = "";
const [crpytoPrice, setcrpytoPrice] = useState(initialcrpytoPrice);


//define coin
const initialCoinText = localStorage.getItem("homeValue") || "ADA";
const [coinText, setCoinText] = useState(initialCoinText);

useEffect(() => {
  localStorage.setItem("coinText", coinText);
}, [coinText])

axios
// .get("http://dummy.restapiexample.com/api/v1/employees")
.get("https://min-api.cryptocompare.com/data/price?fsym="+coinText+"&tsyms=USD&api_key={e6a54e3b9523cbc86de7aaec8faeea1c198adfd5ce0505318ec00b9fdf86e142}")
.then(res => {

  const dataObj = Math.round(res.data.USD*100)/100;
  // console.log(res);
  // console.log(dataObj);
 //  dataObj = dataObj.toUpperCase();
  setcrpytoPrice(dataObj);

})
.catch(err => {
  console.log(err);
})




//hooks
const initialcrpytoNews = "";
const [crpytoNews, setcrpytoNews] = useState(initialcrpytoNews);
const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;

//  //get api data - LINK PRICE
axios
// .get("http://dummy.restapiexample.com/api/v1/employees")
.get("https://min-api.cryptocompare.com/data/v2/news/?categories=" + coinText + "&api_key={e6a54e3b9523cbc86de7aaec8faeea1c198adfd5ce0505318ec00b9fdf86e142}")
.then(res2 => {

  const dataObj2 = truncate(res2.data.Data[0].body,400,'...');
  console.log(res2.data.Data);
  setcrpytoNews(dataObj2);

})
.catch(err => {
  console.log(err);
})

 //hooks

 //TODO - need to evaulate status and return sentiment IFF "Success" else "n/a"
   const initialcrpytoSentiment = "";
  const [crpytoSentiment, setcrpytoSentiment] = useState(initialcrpytoSentiment);

// //  //get api data - LINK PRICE
axios
// // .get("http://dummy.restapiexample.com/api/v1/employees")
.get("https://min-api.cryptocompare.com/data/tradingsignals/intotheblock/latest?fsym="+coinText+"&api_key={e6a54e3b9523cbc86de7aaec8faeea1c198adfd5ce0505318ec00b9fdf86e142}")
.then(res3 => {

  // console.log(res3.data.Response);

  const dataObj3 = res3.data.Data.inOutVar.sentiment;
   setcrpytoSentiment(dataObj3);

   


 })
.catch(err => {
  console.log(err);
})


//HOOKS

const initialHistoricalPrice = "";
const [historicalPrice, setHistoricalPrice] = useState(initialHistoricalPrice);

axios.get("https://min-api.cryptocompare.com/data/v2/histohour?fsym="+coinText+"&tsym=USD&limit=48&api_key={e6a54e3b9523cbc86de7aaec8faeea1c198adfd5ce0505318ec00b9fdf86e142}")
.then(res4 => {
  // console.log(res4.data.Data.Data[24].close);
  const dataObj4 = res4.data.Data.Data[24].close;

  setHistoricalPrice(dataObj4);

 ;



  


})
.catch(err => {
  console.log(err);
})

var priceVariance = Math.round((crpytoPrice / historicalPrice - 1)*1000) / 10;
var priceVarianceAbs = Math.abs(priceVariance);
console.log(priceVariance);
var priceVarianceSymbol = "";
var priceVarianceSymbolArrow = "";
var priceVarianceColor = "";

function priceVarianceSymbolfunc(priceVariance) {
  if (priceVariance >= 0) {
    return ["↑",'#16c784'];
  }
  else {
    return ["↓",'#ea3943'];
  }
}

priceVarianceSymbol = priceVarianceSymbolfunc(priceVariance);
priceVarianceSymbolArrow = priceVarianceSymbol[0];
priceVarianceColor = priceVarianceSymbol[1];
console.log(priceVarianceColor);




//SENTIMENT ICON




// console.log(priceVarianceSymbol);
console.log(priceVarianceSymbol + priceVarianceAbs + "%");

















  return (

 
   <div className="dashboard">
        <div className="navbar">
        <img class="logo" src={require('./img/logo192.png')} />
        <img class="hamburger-menu" src={require('./img/menu.png')} />
        <img class="avatar" src={require('./img/user.png')} />
        </div>
      <div className="title">
          <h1>Crypto</h1>
          {/* <p>An analysis of monthly sales data</p> */}
          <p>Enter ticker:</p>
          <input type="text" value={coinText} onChange={(e)=> setCoinText(e.target.value)}/>
      </div>

      <div class="chart-container">
        <div class="chart-title">
          <h2>{ coinText } Stats</h2>
        </div>
          <div class="kpi-container-outer">
            <div class="kpi-container-inner">
          
                <div class="kpi-metric-container-1">
                <h3>Price</h3>
                  <h1>{ crpytoPrice }</h1>
                  <div class="kpi-variance"style={{ background: priceVarianceColor }}>
                    <div class="kpi-variance-arrow"><h4>{ priceVarianceSymbolArrow }</h4></div>
                    <div class="kpi-variance-number"><h4>{ priceVarianceAbs }%</h4></div>
                  </div>
                </div>
                <div class="kpi-metric-container-2">
                  <h3>Sentiment</h3>
                  <h1>{ crpytoSentiment }</h1>
                  <div class="kpi-variance">
                    <div class="kpi-variance-arrow"><h4>TBD</h4></div>
                    <div class="kpi-variance-number"><h4>TBD</h4></div>
                  </div>
                </div>
              </div>
          </div>

          
      </div>
      
      <div class="chart-container-alt">
        <div class="chart-title">
          <h2>Recent News</h2>
          <div class="chart-text">
          <p>{ crpytoNews }</p>
            <a href="https://www.coindesk.com/" target="_blank">
              <div class="see-more">see more →</div>
            </a>

          </div>
        </div>
          
      </div>

      <div class="chart-container">
        <div class="chart-title">
          <h2>
            ADA Hourly Price
          </h2>
        </div>
          <LINKChart />

          {/* for sales dashboard
          <SalesChart /> */}
      </div>

      {/* <div class="chart-container">
        <div class="chart-title">
          <h2>Area Chart</h2>
        </div>
          <AreaRechartComponent />
      </div> */}

      <div class="chart-container">
        <div class="chart-title">
          <h2>Sankey</h2>
        </div>
          <SankeyChart />
      </div>


      <div class="chart-container">
        <div class="chart-title">
          <h2>Tree Map</h2>
        </div>
          <TreemapChart />
      </div>

      <div class="chart-container">
        <div class="chart-title">
          <h2>TBD</h2>
        </div>
      
      </div>
  
      <div class="chart-container">
        <div class="chart-title">
          <h2>TBD</h2>
        </div>
    
      </div>
  
      <div class="chart-container">
        <div class="chart-title">
          <h2>TBD</h2>
        </div>
         
      </div>
  
      <div class="chart-container">
        <div class="chart-title">
          <h2>TBD</h2>
        </div>
         
      </div>
  
  
  </div>
 

    

    

  );
}

export default App;


// git remote -v
// git add .
// git commit -m "My first commit"
// git push
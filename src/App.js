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

function App() {

  //console.log(lineData);
  

//code here

//react hook for lineData



// //trading crpytoPrice api


//hooks
const initialcrpytoPrice = "";
const [crpytoPrice, setcrpytoPrice] = useState(initialcrpytoPrice);


//  //get api data
axios
// .get("http://dummy.restapiexample.com/api/v1/employees")
.get("https://min-api.cryptocompare.com/data/price?fsym=LINK&tsyms=USD&api_key={e6a54e3b9523cbc86de7aaec8faeea1c198adfd5ce0505318ec00b9fdf86e142}")
.then(res => {

  const dataObj = res.data.USD;
  console.log(res);
  console.log(dataObj);
 //  dataObj = dataObj.toUpperCase();
  setcrpytoPrice(dataObj);

})
.catch(err => {
  console.log(err);
})




  return (

 
   <div className="dashboard">
        <div className="navbar">
        <img class="logo" src={require('./img/logo192.png')} />
        <img class="hamburger-menu" src={require('./img/menu.png')} />
        <img class="avatar" src={require('./img/user.png')} />
        </div>
      <div className="title">
          <h1>Sales Analytics</h1>
          {/* <p>An analysis of monthly sales data</p> */}
      </div>

      <div class="chart-container">
        <div class="chart-title">
          <h2>KPIs</h2>
        </div>
          <div class="kpi-container-outer">
            <div class="kpi-container-inner">
          
                <div class="kpi-metric-container-1">
                  <h3>Sales</h3>
                  <h1>$102K</h1>
                  <div class="kpi-variance">
                    <div class="kpi-variance-arrow"><h4>↓</h4></div>
                    <div class="kpi-variance-number"><h4>4.2%</h4></div>
                  </div>
                </div>
                <div class="kpi-metric-container-2">
                  <h3>$LINK Price</h3>
                  <h1>{ crpytoPrice }</h1>
                  <div class="kpi-variance">
                    <div class="kpi-variance-arrow"><h4>↓</h4></div>
                    <div class="kpi-variance-number"><h4>13.7%</h4></div>
                  </div>
                </div>
              </div>
     

          </div>

          
      </div>
      
      <div class="chart-container-alt">
        <div class="chart-title">
          <h2>Commentary</h2>
          <div class="chart-text">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
          </p>
          </div>
        </div>
          
      </div>

      <div class="chart-container">
        <div class="chart-title">
          <h2>Trailing 30 days Sales</h2>
        </div>
          <SalesChart />
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
        {/* <div id="TreemapChart"> */}
          <TreemapChart />
          {/* </div> */}
      </div>
  
  </div>
 

    

    

  );
}

export default App;


// git remote -v
// git add .
// git commit -m "My first commit"
// git push
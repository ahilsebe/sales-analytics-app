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

function App() {

  //console.log(lineData);
  

//code here

//react hook for lineData


  return (
  
   
   <div className="dashboard"> 
      <div className="title">
          <h1>Sales Analytics</h1>
          <p>An analysis of monthly sales data</p>
      </div>
      <div class="chart-container">
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

      <div class="chart-container">
        <div class="chart-title">
          <h2>Sankey</h2>
        </div>
          <SankeyChart />
      </div>
      
      

    

  </div>

    

    

  );
}

export default App;


// git remote -v
// git add .
// git commit -m "My first commit"
// git push
import logo from './logo.svg';
import './App.css';


import axios from 'axios';
import React, {useState, useEffect} from 'react';
import lineData  from './data/lineData'
//import { set } from 'core-js/core/dict';
// import BarChart from './components/BarChart';


//charts
import SankeyChart from './charts/lineChart';

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
      <h2>Sankey</h2>
         <div class="chart">
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
import axios from "axios";
import React, {useState, useEffect} from 'react';



//const initiallLineData = "";
//const [lineData, setLineData] = useState(initiallLineData);


const lineData = 1;
axios.get('https://sheet.best/api/sheets/55da239f-582c-401b-8407-ef0e2ea1f550')
.then(res => {
    const lineData = res.request.readyState;
    //setLineData(lineData);
    console.log(lineData);
})

.catch(err => {
    console.log(err);
  });


// const lineData = [
//     {
//       date: "2020-01-31",
//       market1: 3.1,
//     },
//     {
//       date: "2020-02-28",
//       market1: 3.6,
//     },
//     {
//       date: "2020-03-31",
//       market1: 3.5,
//     },
//     {
//       date: "2020-04-30",
//       market1: 3.3,
//     },
//     {
//       date: "2020-05-31",
//       market1: 3.2,
//     },
//     {
//       date: "2020-06-30",
//       market1: 3.1,
//     },
//     {
//       date: "2020-07-31",
//       market1: 3.3,
//     },
//     {
//       date: "2020-08-31",
//       market1: 3.4,
//     },
//     {
//       date: "2020-09-30",
//       market1: 3.2,
//     },
//     {
//       date: "2020-10-31",
//       market1: 3.0,
//     },
//     {
//       date: "2020-11-30",
//       market1: 3.0,
//     },
//     {
//       date: "2020-12-31",
//       market1: 3.1,
//     },
    
//   ];
  
  export default lineData;
  
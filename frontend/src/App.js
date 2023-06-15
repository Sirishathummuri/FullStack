import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Color from './pages/Color';
function App() {

  let[data,setData]=useState([]);
  const fetchData=async()=>
  {
    const response=await axios.get(" https://reqres.in/api/unknown");
    setData(response.data.data)

  };
  //useeffect for api data link
  useEffect(()=>
  {
    fetchData();
  },[]);
  return (

    <div className="App">
     <h1>COLORS -- TASK1</h1>
     <h1>-------------------------</h1>
     {/* {JSON.stringify(data)} -->without list */}  
     {data.map((color)=>
     {
      return ( 
      <Color
      name={color.name}
      />

      
      );
     })}

<h1>
</h1>
<h1></h1>
<h1>COLORS -- TASK2</h1>
<h1>---------------</h1>
{data.map((color)=>
     {
      return (
     
    <center>
     <h1 style={{color:color.color}}>{color.name}</h1> 
     </center>
      
      );
     })}


     
    </div>
  );
}

export default App;

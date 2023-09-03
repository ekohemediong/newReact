import React  ,{useState,useEffect,useRef,UseMemo} from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css"
export default function App() {
  let [num,setNum]=useState ("")
  let one=()
  =>setNum((value)=>value+=1+"")
  let two=()=>setNum((value)=>value+=2+"")
  let three=()=>setNum((value)=>value+=3+"")
  return (
    <div className='container p-2'>
        <div>
        <input type="text" value={num} className="form-control"
        onChange={(e)=>setNum(e.target.value)} disabled placeholder="100"/>
          
        </div>
      <div>
        <button onClick={one}>
          1</button>
        <button onClick={two}>2</button>
        <button onClick={three}>3</button>
      </div>  
    </div>
  );
}

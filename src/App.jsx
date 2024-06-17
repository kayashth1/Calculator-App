import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal,setcalVal] = useState("");
  const onClickchange = (value)=>{
     if(value === 'C'){
      setcalVal("");
     }
     else if(value === '='){
      const result = eval(calVal);
      setcalVal(result); 
     }
     else{
      const newvalue = calVal + value;
      setcalVal(newvalue);
     }
  }
  return (
    <div className = {styles.calculator}>
      <Display displayValue = {calVal}></Display>
      <ButtonsContainer onClickchange={onClickchange}></ButtonsContainer>
    </div>
  );
}

export default App;

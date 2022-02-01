import { useReducer } from "react";
import Digitbutton from "./components/Digitbutton";
import Operationbutton from "./components/Operationbutton";
import "./css/style.css"

export const actions ={
  add_digit: "adddigit",
  choose_operation: "chooseoperation",
  clear: "clear",
  delete_digit: "deletedigit",
  evaluate:"evaluation " 
}

function reducer(state,{type,payload}){
  switch(type){
    case actions.add_digit: 
    if(payload.digit === "0" && state.currentoperand === "0") return state
    if(payload.digit === "." && state.currentoperand.includes(".")){
      return state
    }
    return {
      ...state,
      currentoperand:`${state.currentoperand || ""}${payload.digit}`,
    }
    case actions.clear: {
      return { }
    }

  }

}




function App() {

  const[{currentoperand,previousoperand,operation},dispatch] = useReducer(reducer,{})

  return (
    <div className="calculator_grid">
      <div className="output">
        <div className="previous_operand">{previousoperand} {operation}</div>
        <div className="current_operator">{currentoperand}</div>
      </div>
      <button className="span_two" onClick={() => dispatch({type: actions.clear})}>AC</button>
      <button>DEL</button>
      <Operationbutton operation = "/" dispatch={dispatch} />
      <Digitbutton digit = "1" dispatch={dispatch} />
      <Digitbutton digit = "2" dispatch={dispatch} />
      <Digitbutton digit = "3" dispatch={dispatch} />
      <Operationbutton operation = "*" dispatch={dispatch} />
      <Digitbutton digit = "4" dispatch={dispatch} />
      <Digitbutton digit = "5" dispatch={dispatch} />
      <Digitbutton digit = "6" dispatch={dispatch} />
      <Operationbutton operation = "+" dispatch={dispatch} />
      <Digitbutton digit = "7" dispatch={dispatch} />
      <Digitbutton digit = "8" dispatch={dispatch} />
      <Digitbutton digit = "9" dispatch={dispatch} />
      <Operationbutton operation = "-" dispatch={dispatch} />
      <Digitbutton digit = "." dispatch={dispatch} />
      <Digitbutton digit = "0" dispatch={dispatch} />
      <button className="span_two">=</button>
    </div>
  );
}

export default App;

import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, { initialState } from './reducers';
import { applyNumber, changeOperation, clearDisplay, addMemory, applyMemory, clearMemory } from './actions';

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const handleNumberClick = (number)=>{
    dispatch(applyNumber(number));
  }
 const handleOperationClick = ( operator ) => {
      dispatch(changeOperation( operator ));
 }
    

    const handleClearDisplay = () => {
      dispatch(clearDisplay());
    }

   const handleMemoryAdd = () => {
     dispatch(addMemory());
   }
  const handleMemoryApply = () =>{
    dispatch(applyMemory());
  }

  const handleMemoryClear = () => {
      dispatch(clearMemory()); 
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={0}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onclick={handleMemoryAdd}/>
              <CalcButton value={"MR"} onclick={handleMemoryApply}/>
              <CalcButton value={"MC"} onclick={handleMemoryClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onclick={()=> handleNumberClick(1)}/>
              <CalcButton value={2} onclick={()=> handleNumberClick(2)}/>
              <CalcButton value={3} onclick={()=> handleNumberClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onclick={()=> handleNumberClick(4)}/>
              <CalcButton value={5} onclick={()=> handleNumberClick(5)}/>
              <CalcButton value={6} onclick={()=> handleNumberClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onclick={()=> handleNumberClick(7)}/>
              <CalcButton value={8} onclick={()=> handleNumberClick(8)}/>
              <CalcButton value={9} onclick={()=> handleNumberClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onclick={()=>handleOperationClick("+")}/>
              <CalcButton value={"*"} onclick={()=>handleOperationClick("*")}/>
              <CalcButton value={"-"} onclick={()=>handleOperationClick("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onclick={handleClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

import { id } from "prelude-ls";
import { Component } from "react";

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      input: 0,
      operation: null,
      num: 0,
      storedNum: 0,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value,
      num: e.target.value
    })
  }

  handleOperation = (e) => {
    this.setState({
        operation: e.target.value,
        storedNum: this.state.input 
    })
  }

  handleResult = () => {
    const {operation, num, storedNum} = this.state
    console.log(operation)
    switch (operation) {
      case "+":
        return this.setState({
          input: Number(num) + Number(storedNum)
        });

      case "-":
        return this.setState({
          input: Number(storedNum) - Number(num)
        });
      
      case "/":
        return this.setState({
          input: (Number(storedNum) / Number(num))
        });

      case "x":
        return this.setState({
          input: Number(storedNum) * Number(num)
        });
    }

  }

  handleClear = () => {
      this.setState({
          input: 0,
          operation: null,
          result: null,
      })
  }

  render() {
    const { input, result } = this.state;
    return (
      <div className="Calculator">
        <input type="text" className="Display" value={input} onChange={this.handleInputChange}/>

        <div className="Buttons">
          <div className="Numbers-Container">
            <button value="9" className="Numbers" onClick={this.handleInputChange}>9</button>
            <button value="8" className="Numbers" onClick={this.handleInputChange}>8</button>
            <button value="7" className="Numbers" onClick={this.handleInputChange}>7</button>
            <button value="6" className="Numbers" onClick={this.handleInputChange}>6</button>
            <button value="5" className="Numbers" onClick={this.handleInputChange}>5</button>
            <button value="4" className="Numbers" onClick={this.handleInputChange}>4</button>
            <button value="3" className="Numbers" onClick={this.handleInputChange}>3</button>
            <button value="2" className="Numbers" onClick={this.handleInputChange}>2</button>
            <button value="1" className="Numbers" onClick={this.handleInputChange}>1</button>
            <button value=".">.</button>
            <button value="0" className="Numbers" onClick={this.handleInputChange}>0</button>
            <button value="="  onClick={this.handleResult}>&#61;</button>
          </div>
          
          <div className="Operations-Container">
            <button value="/" className="Operations" onClick={this.handleOperation}>&#247;</button>
            <button value="x" className="Operations" onClick={this.handleOperation}>&times;</button>
            <button value="+" className="Operations" onClick={this.handleOperation}>&#43;</button>
            <button value="-" className="Operations" onClick={this.handleOperation}>&#45;</button>
          </div>

          <div className="TopBtns-Container">
            <button value="AC" className="TopBtns" onClick={this.handleClear}>AC</button>
            <button value="+/-" className="TopBtns">+/-</button>
            <button value="%" className="TopBtns">%</button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Calculator;

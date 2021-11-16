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
      <div>
        <input type="text" className="" value={input} onChange={this.handleInputChange}/>

        <button value="9" onClick={this.handleInputChange}>9</button>
        <button value="8" onClick={this.handleInputChange}>8</button>
        <button value="7" onClick={this.handleInputChange}>7</button>
        <button value="6" onClick={this.handleInputChange}>6</button>
        <button value="5" onClick={this.handleInputChange}>5</button>
        <button value="4" onClick={this.handleInputChange}>4</button>
        <button value="3" onClick={this.handleInputChange}>3</button>
        <button value="2" onClick={this.handleInputChange}>2</button>
        <button value="1" onClick={this.handleInputChange}>1</button>
        <button value="0" onClick={this.handleInputChange}>0</button>
        <button value="/" onClick={this.handleOperation}>&#247;</button>
        <button value="x" onClick={this.handleOperation}>&times;</button>
        <button value="+" onClick={this.handleOperation}>&#43;</button>
        <button value="-" onClick={this.handleOperation}>&#45;</button>
        <button value="=" onClick={this.handleResult}>&#61;</button>
        <button value="AC" onClick={this.handleClear}>AC</button>
        <button value="%">%</button>
        <button value="+/-">+/-</button>
      </div>
    );
  }
}

export default Calculator;

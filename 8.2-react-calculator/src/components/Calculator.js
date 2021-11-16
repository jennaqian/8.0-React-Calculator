import { Component } from "react";

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      input: 0,
      operation: null,
      result: null,
    };
  }

  handleInputChange = (e) => {
    console.log(e.target.value)
  }

  handleOperation = (e) => {
    this.setState({
        operation: e.target.value
    })
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
        <input type="text" value={input} onChange={this.handleInputChange}/>

        <button value="9">9</button>
        <button value="8">8</button>
        <button value="7">7</button>
        <button value="6">6</button>
        <button value="5">5</button>
        <button value="4">4</button>
        <button value="3">3</button>
        <button value="2">2</button>
        <button value="1">1</button>
        <button value="0">0</button>
        <button value="/" onClick={this.handleOperation}>&#247;</button>
        <button value="x" onClick={this.handleOperation}>&times;</button>
        <button value="+" onClick={this.handleOperation}>&#43;</button>
        <button value="-" onClick={this.handleOperation}>&#45;</button>
        <button value="=">&#61;</button>
        <button value="AC" onClick={this.handleClear}>AC</button>
        <button value="%">%</button>
        <button value="+/-">+/-</button>
      </div>
    );
  }
}

export default Calculator;

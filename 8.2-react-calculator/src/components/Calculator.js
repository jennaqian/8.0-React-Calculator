import { Component } from "react";

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      input: 0,
      operation: null,
      num: 0,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      input: this.state.input + e.target.value,
    })
  }

  handleOperation = (e) => {
    this.setState({
        operation: e.target.value,
        num: Number(this.state.input),
        input: "",
    })
  }

  handleResult = () => {
    const {operation, num, input} = this.state
    switch (operation) {
      case "+":
        return this.setState({
          input: num + Number(input)
        });

      case "-":
        return this.setState({
          input: num - Number(input)
        });
      
      case "/":
        return this.setState({
          input: Math.round(num / Number(input))
        });

      case "x":
        return this.setState({
          input: num * Number(input)
        });

      default: 
        break;
    }

  }

  handlePosOrNeg = (e) => {
    if(e.target.value === "+/-") {
      this.setState({
        input: -this.state.input
      })
    } else if(e.target.value === "%") {
      this.setState({
        input: Number(this.state.input) / 100
      })
    }
  }


  handleClear = () => {
      this.setState({
          input: 0,
          operation: null,
          num: null,
      })
  }
  
  handleInput = (num) => {
    return new Intl.NumberFormat().format(num)
  }

  render() {
    const { input } = this.state;
    return (
      <div className="Calculator">
        <input type="text" className="Display" value={input[0] === "0" ? this.handleInput(Number(input.slice(1))): input} onChange={this.handleInputChange}/>

        <div className="Buttons">
          <div className="Numbers-Container">
            <button value="9" className="Numbers" onClick={this.handleInputChange}>{"9"}</button>
            <button value="8" className="Numbers" onClick={this.handleInputChange}>8</button>
            <button value="7" className="Numbers" onClick={this.handleInputChange}>7</button>
            <button value="6" className="Numbers" onClick={this.handleInputChange}>6</button>
            <button value="5" className="Numbers" onClick={this.handleInputChange}>5</button>
            <button value="4" className="Numbers" onClick={this.handleInputChange}>4</button>
            <button value="3" className="Numbers" onClick={this.handleInputChange}>3</button>
            <button value="2" className="Numbers" onClick={this.handleInputChange}>2</button>
            <button value="1" className="Numbers" onClick={this.handleInputChange}>1</button>
            <button value="." className="BtmBtns" onClick={this.handleInputChange}>.</button>
            <button value="0" className="Numbers" onClick={this.handleInputChange}>0</button>
            <button value="=" className="BtmBtns" onClick={this.handleResult}>&#61;</button>
          </div>
          
          <div className="Operations-Container">
            <button value="/" className="Operations" onClick={this.handleOperation}>&#247;</button>
            <button value="x" className="Operations" onClick={this.handleOperation}>&times;</button>
            <button value="+" className="Operations" onClick={this.handleOperation}>&#43;</button>
            <button value="-" className="Operations" onClick={this.handleOperation}>&#45;</button>
          </div>

          <div className="TopBtns-Container">
            <button value="AC" className="TopBtns" onClick={this.handleClear}>AC</button>
            <button value="+/-" className="TopBtns" onClick={this.handlePosOrNeg}>+/-</button>
            <button value="%" className="TopBtns" onClick={this.handlePosOrNeg}>%</button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Calculator;

import { Component } from "react";

class Calculator extends Component {
    constructor() {
        super()
    
        this.state = {
          input: 0,
          operation: null,
          result: null,
        }
    }

    

    render () {
        return (
            <div>
                <input />
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
                <button value="/">&#247;</button>
                <button value="x">&times;</button>
                <button value="+">&#43;</button>
                <button value="-">&#45;</button>
                <button value="=">&#61;</button>
                <button value="AC">AC</button>
                <button value="%">%</button>
                <button value="+/-">+/-</button>
            </div>
        )
    }
}

export default Calculator; 
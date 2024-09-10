import React, { Component } from "react";

class XClassComp extends Component {
    
    state = {
        count: 0,
    }

    handleIncrement = () => {
        this.setState({count:this.state.count + 1});
    }

    handleDecrement = () => {
        this.setState({count: this.state.count - 1});
    }

    render() {
        return (
            <div>
                <h1>
                    Counter App
                </h1>

                <div className="counter">
                    <p>Count: {this.state.count}</p>
                    <div className="counter-btn">
                        <button onClick={this.handleIncrement}>Increment</button>
                        <button onClick={this.handleDecrement}>Decrement</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default XClassComp;
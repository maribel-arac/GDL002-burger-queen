import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div className="center">
                <p>{this.state.count}</p>
                <button className= "btn btn-primary" onClick={this.handleIncrement}>+</button>
                <button className= "btn btn-primary" onClick={this.handleDecrement}>-</button>
            </div>
        );
    };
};

export default Counter;
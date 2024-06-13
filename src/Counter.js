import React from 'react';

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0,
        };
    }

    handleIncrement = () => {
        this.setState({count: this.state.count+1});
    }

    handleDecrement = () => {
        this.setState({count: this.state.count-1});
    }

    render(){
        return(
            <div>
                <h1>Counter App</h1>
                <div>
                    Count: {this.state.count}
                </div>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter;
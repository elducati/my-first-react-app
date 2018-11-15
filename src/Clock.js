import React from 'react';


let time = new Date().toLocaleString();

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
        
    }
    componentDidMount() {
        this.intervalID = setInterval (
           ( ) => this.updateClock(),
            1000
        );

    }
    componentWillMount() {
        clearInterval(this.intervalID);
    }
    updateClock() {
        console.log(this);
        this.setState({
            time: new Date().toLocaleString()
        });
    }
    render() {
        return(
            <p>
            The time is {this.state.time};
            </p>
        );
    }
}
export default Clock;
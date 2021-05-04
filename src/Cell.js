import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(prop) {
        super() 
        this.state = {
            color: prop.value
        }
    }

    render() {
        console.log(this)
        return <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.updateState}></div>
    }

    updateState = () => {
        return this.setState({
            color: '#333'
        })
    }
}
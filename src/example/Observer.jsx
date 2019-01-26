import React, { Component } from "react";
import ReactDOM from "react-dom";
import { observable, computed,action } from 'mobx';
import { observer } from 'mobx-react';


@observer
class Observer extends Component {
    @observable
    count = 0;

    @action
    handleClick = (count) => () => {
        this.count += count;
    }
    render() {
        console.log(this.count)
        console.log(this.props)

        return (
            <div>
                Counter:{this.count}
                <button onClick={this.handleClick(1)}>+</button>
                <button onClick={this.handleClick(-1)}>-</button>
            </div>
        );
    }
}

export default Observer;
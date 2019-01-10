import React, {Component} from 'react';
import Board from "./Board";

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            currentPosition: new Array(9)
        };
        this.boardCellClicked = this.boardCellClicked.bind(this);
    }

    boardCellClicked(idx, v) {
        let current = JSON.parse(JSON.stringify(this.state.currentPosition));
        current[idx] = v;
        //todo
        this.setState( state => ({
            currentPosition: current,
            step: this.state.step + 1
        }));

    }

    render() {
        return (
            <div>
                <div>haha</div>
                <Board currentPosition={this.state.currentPosition} boardCellClicked={this.boardCellClicked} step={this.state.step}/>
            </div>
        );
    }
}
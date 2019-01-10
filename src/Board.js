import React, {Component} from 'react';
import './css/board.css'

export default class Board extends Component {


// {{boardCellClicked(currentPosition[i])}}
    render() {
        let boardCells = [];
        let currentPosition = this.props.currentPosition;
        for(let i = 0; i < currentPosition.length; i ++) {
            //todo
            boardCells.push(<div className='board-cell' onClick={() => this.props.boardCellClicked(i, this.props.step % 2 == 0 ? 'X' : 'O')} key={i}>{currentPosition[i]}</div>);
        }
        return (
            <div className='board'>
                {boardCells}
            </div>
        );
    }
}
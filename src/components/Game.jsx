import React from 'react';

import Board from './Board';
import Moves from './Moves';

import { calculateWinner, isDraw } from '../utils'


class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      status: 'Next player: X',
      winnerLine: [],
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    }, this.checkingBoard);
  }

  handleJumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    }, this.checkingBoard);
  }

  checkingBoard() {
    const { history, stepNumber } = this.state;
    const current = history[stepNumber];
    const winnerResult = calculateWinner(current.squares);
    let status;
    let winnerLine = [];

    if (!winnerResult) {
      if (isDraw(current.squares)) {
        status = 'It\'s a DRAW!';
      } else {
        status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
      }
    } else {
      const { winner, line } = winnerResult;
      winnerLine = line;
      status = `Winner ${winner}`;
    }

    this.setState({
      status,
      winnerLine
    });
  }

  render() {
    const { history, status, winnerLine, stepNumber } = this.state;
    const current = history[stepNumber];

    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={i => this.handleClick(i)} squares={current.squares} winnerLine={winnerLine} />
        </div>
        <div className="game-info">
          <div className="status">{status}<hr /></div>
          <Moves onJumpTo={this.handleJumpTo} currentStep={stepNumber} history={history} />
        </div>
      </div>
    );
  }
}

export default Game;
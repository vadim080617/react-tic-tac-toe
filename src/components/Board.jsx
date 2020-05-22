import React from 'react';

import Square from './Square'


class Board extends React.Component {
  renderSquare(i) {
    return <Square
      className={this.props.winnerLine.includes(i) ? 'win-field' : ''}
      key={i}
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />;
  }

  render() {
    return (
      <div>
        {
          ['3', 'element', 'array'].map((el, rowIndex) =>
            <div key={rowIndex} className="board-row">
              {
                ['3', 'element', 'array'].map((el, colIndex) => this.renderSquare(3 * rowIndex + colIndex))
              }
            </div>
          )
        }
      </div>
    );
  }
}

export default Board;
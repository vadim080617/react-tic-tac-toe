import React, { Component } from 'react';

export default class Moves extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReversedView: false,
    }
  }

  renderView(step, isCurrent = false) {
    const { squares } = step;
    const rowArr = [];
    let temporarryArr = [];

    squares.forEach((el, index, arr) => {
      temporarryArr.push(el);
      if (temporarryArr.length === 3 || index === arr.length - 1) {
        const row = <div key={`row${(index + 1) / 3}`}>
          {
            temporarryArr.map((el, tempArrayIndex) =>
              <div className={`historyCell ${isCurrent ? 'current-cell' : ''}`} key={index - 1 + tempArrayIndex}>{el || ' '}</div>)
          }
        </div>
        rowArr.push(row);
        temporarryArr = [];
      }
    });

    const result = <div className="historyView">{rowArr.map(el => el)}</div>
    
    return result;
  }

  toggleReverse = () => {
    this.setState({ isReversedView: !this.state.isReversedView })
  }

  render() {
    const { onJumpTo, history, currentStep } = this.props;
    const { isReversedView } = this.state;

    let list = history.map((step, move) => {
      const desc = move ?
        'To move #' + move :
        'To start';
      return (
        <li className="historyStep" key={move}>
          <button onClick={() => onJumpTo(move)}>{desc}</button>
          {this.renderView(step, currentStep === move)}
        </li>
      );
    })

    if (isReversedView) {
      list = list.reverse();
    }

    return (
      <div>
        <div>
          <button onClick={this.toggleReverse}>Sort moves {isReversedView ? 'desc' : 'asc'}</button>
        </div>
        <ol>{list}</ol>
      </div>);
  }
}
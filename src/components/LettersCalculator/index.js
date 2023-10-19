// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onClickDigits = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-bg-container">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
        <h1 className="main-heading">Calculate the Letters you enter</h1>
        <div>
          <label htmlFor="letter" className="para">
            Enter the phrase
          </label>
          <br />
          <input
            type="type"
            id="letter"
            placeholder="Enter the phrase"
            onChange={this.onClickDigits}
            className="input"
          />
        </div>
        <p className="count-card">No.of letters: {count}</p>
      </div>
    )
  }
}

export default LettersCalculator

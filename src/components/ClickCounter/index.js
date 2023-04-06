import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrease = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
    console.log('clicked')
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          The Button Has Been clicked <br />
          <span className="span-num">{count}</span> Times
        </h1>
        <p className="description">Click The Button To Increase The Count!</p>
        <div className="button-container">
          <button className="button" type="button" onClick={this.onIncrease}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter

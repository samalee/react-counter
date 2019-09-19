import React, { Component } from 'react';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { value: 0 }
  //   this.inc = this.inc.bind(this)
  //   this.dec = this.dec.bind(this)
  // }
  state = { value: 0 }

  inc = () => {
    // asynchronous 
    // this.setState({ value: this.state.value + 1 })
    this.setState( (state) => {
      return { value: state.value + 1}
    })
  }

  dec = () => {
    // this.setState({ value: this.state.value - 1})
    this.setState( (state) => {
      return { value: state.value - 1}
    })
  }

  render() {
    return (
      <div>
        <h1 className='colored'>Counter Example</h1>
        <p>{ this.state.value }</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}

// React.createElement(h1, counter)React.createElement(h1, counter)
// React.createElement(div, counter)

export default App;
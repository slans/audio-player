import React, { Component } from 'react';

class App extends Component {
  state = {
    isToogleOn: false
  }

  handleClick = () => {
    this.setState(state => ({
      isToogleOn: !state.isToogleOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToogleOn 
          ? 'Включено'
          : 'Выключено'
        }
      </button>
    )
  }
}

export default App;
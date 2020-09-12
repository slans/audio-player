import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 0
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = name === 'isGoing' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  render() {

    return (
      <form>
        <label>
          Пойдут:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Количество гостей:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleChange}
          />
        </label>
      </form>
    )
  }
}

export default App;
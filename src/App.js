import React, { Component } from 'react';
import './styles.css';

const FancyBorder = props => {
  return (
    <div className={`FancyBorder FancyBorder-${props.color}`}>
      {props.children}
    </div>
  )
}

const Dialog = props => {
  return (
    <FancyBorder color='blue'>
      <h1 className='Dialog-title'>
        {props.title}
      </h1>
      <p className='Dialog-message'>
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}

class App extends Component {
  state = {
    login: ''
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      login: value
    })
  }

  handleSubmit = () => {
    alert(`Welcome on board, ${this.state.login}`)
  }

  render() {
    const {login} = this.state;
    return (
      <Dialog title='Mars Exploration Program'
              message='How should we refer to you?'>
        <input type='text'
               value={login} 
               onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>
          Sign me up
        </button>
      </Dialog>
    )
  }
}

export default App;
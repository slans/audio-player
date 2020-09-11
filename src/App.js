import React, { Component } from 'react';

const WarningBanner = props => {
  if (!props.warn) return null;
  return (
    <div className='warning'>
      Предупреждение!
    </div>
  )
}

const Mailbox = props => {
  const messages = props.messages;
  return (
    <>
      <h1>Здравствуйте</h1>
      {messages.length > 0 && <h2>У вас непрочитанных сообщений {messages.length}</h2>}
    </>
  )
}

const LoginButton = props => {
  return (
    <button onClick={props.onClick}>
      Залогиниться
    </button>
  )
}

const LogoutButton = props => {
  return (
    <button onClick={props.onClick}>
      Вылогиниться
    </button>
  )
}

const Greeting = props => {
  return (
    <p>Hello {props.isLoggedIn ? 'client' : 'guest'}</p>
  )
}

class LoginControl extends Component {
  state = {
    isLoggedIn: false
  }

  handleLogin = () => {
    this.setState(state => ({
      isLoggedIn: true
    }))
  }

  handleLogout = () => {
    this.setState(state => ({
      isLoggedIn: false
    }))
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const button = isLoggedIn
      ? <LogoutButton onClick={this.handleLogout} />
      : <LoginButton onClick={this.handleLogin} />

    return (
      <>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </>
    )
  }
}

class App extends Component {
  state = {
    isWarning: true
  }

  handleClick = () => {
    this.setState(state => ({
      isWarning: !state.isWarning
    }))
  }

  render() {
    const showWarning = this.state.isWarning;
    const messagesArr = ['Привет', 'Как дела?', 'Где был?']

    return (
      <>
        <WarningBanner warn={showWarning} />
        <button onClick={this.handleClick}>
          {showWarning ? 'Скрыть' : 'Показать'}
        </button>
        <Mailbox messages={messagesArr} />
        <LoginControl/>
      </>
    )
  }
}

export default App;
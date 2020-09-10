import React, { Component } from 'react';


class App extends Component {
  render() {
    const getFullName = user => `${user.name} ${user.surname}`;


    let testUser = {
      name: 'Slavik',
      surname: 'Sergeevich'
    }
    let element = <h1>Hello {getFullName(testUser)}!</h1>;

    return (
      <>
        {element}
      </>
    )
  }
}

export default App;
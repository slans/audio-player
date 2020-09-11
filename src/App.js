import React, { Component } from 'react';


class App extends Component {

  render() {
    const posts = this.props.posts;
    const sidebar = posts.map(entry => {
      return <li key={entry.id}>{entry.title}</li>
    });

    const content = posts.map(entry => {
      return (
        <div key={entry.index}>
          <span>{entry.title}</span>
          <span>{entry.content}</span>
        </div>
      )
    });

    return (
      <>
        <ul>
          {sidebar}
        </ul>
        {content}
      </>
    )
  }
}

export default App;
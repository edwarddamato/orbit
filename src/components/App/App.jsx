import React from 'react';
import './App.scss';
import Orbit from '../Orbit';
import Planet from '../Planet';

class App extends React.Component {
  render() {
    return (
      <section className="app">
        <Orbit>
          {/* <Planet color="red" />
          <Planet color="black" />
          <Planet color="blue" />
          <Planet color="yellow" />
          <Planet color="pink" />
          <Planet color="brown" />
          <Planet color="cyan" />
          <Planet color="fuchsia" />
          <Planet color="#663399" />
          <Planet color="#C5EFF7" /> */}
          <Planet color="#22313F" />
          <Planet color="#00E640" />
          <Planet color="#1F3A93" />
          <Planet color="#91B496" />
          <Planet color="#C8F7C5" />
          <Planet color="#F89406" />
          <Planet color="#F9690E" />
          <Planet color="#6C7A89" />
          <Planet color="#D91E18" />
        </Orbit>
      </section>
    );
  }
}

export default App;

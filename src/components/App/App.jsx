import React from 'react';
import './App.scss';
import Orbit from '../Orbit';
import Planet from '../Planet';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      planets: []
    };
  }

  componentDidMount () {
    const planets = [];
    for (let count = 0; count < 50; count++) {
      planets.push(count);
    }
    this.setState({ planets })
  }

  render () {
    return (
      <section className="app">
        <Orbit planetOrbitDuration={20000} planets={this.state.planets} />
      </section>
    )}
}
App.propTypes = {
};

export default App;

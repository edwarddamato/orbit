import React from 'react';
import './Orbit.scss';
import Planet from '../Planet';

class Orbit extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      planets: []
    };

    this.pushPlanet = this.pushPlanet.bind(this);
  }

  pushPlanet (planet) {
    const planets = this.state.planets;
    planets.push(planet);
    this.setState({ planets });
  }

  componentWillReceiveProps (nextProps) {
    const planets = nextProps.planets;
    const planetOrbitDuration = nextProps.planetOrbitDuration;
    const children = planets.map((planet, index) => {
      return <Planet key={index} planetOrbitDuration={planetOrbitDuration} />;
    });
    console.log(children);
    const childrenCount = children.length;
    const piePerChild = 360 / childrenCount;
    const childTimePerPie = (piePerChild * planetOrbitDuration) / 360;

    let counter = 0;
    for (const child of children) {
      setTimeout(() => {
        this.pushPlanet(child);
        // console.log(child.props.className);
      }, childTimePerPie * counter);
      counter++;
    }
  }

  render () {
    return (
      <section className="orbit">
        {this.state.planets}
      </section>
    )}
}
Orbit.propTypes = {
  planetOrbitDuration: React.PropTypes.number.isRequired,
  planets: React.PropTypes.array.isRequired
  // children: React.PropTypes.node.isRequired
};

export default Orbit;

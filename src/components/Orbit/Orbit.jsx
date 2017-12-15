import React from 'react';
import PropTypes from 'prop-types';
import Canvas from '../Canvas';
import './Orbit.scss';

class Orbit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: []
    };
  }

  // pushPlanet (planet) {
  //   const planets = this.state.planets;
  //   planets.push(planet);
  //   this.setState({ planets });
  // }

  // componentWillReceiveProps (nextProps) {
  //   const planets = nextProps.planets;
  //   const planetOrbitDuration = nextProps.planetOrbitDuration;
  //   const children = planets.map((planet, index) => {
  //     return <Planet key={index} planetOrbitDuration={planetOrbitDuration} />;
  //   });
  //   console.log(children);
  //   const childrenCount = children.length;
  //   const piePerChild = 360 / childrenCount;
  //   const childTimePerPie = (piePerChild * planetOrbitDuration) / 360;

  //   let counter = 0;
  //   for (const child of children) {
  //     setTimeout(() => {
  //       this.pushPlanet(child);
  //       // console.log(child.props.className);
  //     }, childTimePerPie * counter);
  //     counter++;
  //   }
  // }

  render() {
    return (
      <section className="orbit">
        <Canvas
          id={'myCanvas'}
          width={800}
          height={800}
          orbitRadius={200}>
          {this.props.children}
        </Canvas>
      </section>
    );
  }
}
Orbit.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Orbit;

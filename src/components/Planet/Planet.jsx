import React from 'react';
import './Planet.scss';

class Planet extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      animDuration: 1000
    };
  }

  render () {
    return (
      <div style={{WebkitAnimationDuration: `${this.props.planetOrbitDuration}ms`, animationDuration: `${this.props.planetOrbitDuration}ms`}} className={`planet`}>
        P
      </div>
    )}
}
Planet.propTypes = {
  planetOrbitDuration: React.PropTypes.number.isRequired
};

export default Planet;

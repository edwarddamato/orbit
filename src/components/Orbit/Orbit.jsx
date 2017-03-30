import React from 'react';
import './Orbit.scss';
import Planet from '../Planet';

class Orbit extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
    };
  }

  render () {
    return (
      <div className="orbit">
        <Planet />
        <Planet />
        <Planet />
        <Planet />
      </div>
    )}
}
Orbit.propTypes = {
};

export default Orbit;

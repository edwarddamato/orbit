import React from 'react';
import PropTypes from 'prop-types';
import './Planet.scss';

class Planet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="planet">
        {this.props.color}
      </div>
    );
  }
}
Planet.propTypes = {
  color: PropTypes.string.isRequired
};

export default Planet;

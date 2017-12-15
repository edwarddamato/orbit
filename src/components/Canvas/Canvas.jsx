import React from 'react';
import PropTypes from 'prop-types';
import './Canvas.scss';
import { draw } from '../../drawing';

class Canvas extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // this.draw = this.draw.bind(this);
  // }

  componentDidMount() {
    const context = document.getElementById(this.props.id).getContext('2d');
    draw(context, 0, this.props)();
    // console.log(this.props.children);
  }

  render() {
    return (
      <canvas
        id={this.props.id}
        width={this.props.width}
        height={this.props.height}
        className="canvas" />
    );
  }
}
Canvas.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  orbitStrokeColor: PropTypes.string.isRequired,
  orbitStrokeWidth: PropTypes.number.isRequired,
  orbitRadius: PropTypes.number.isRequired,
  outerDistance: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
Canvas.defaultProps = {
  id: 'someCanvas',
  width: 600,
  height: 600,
  backgroundColor: '#f4f4f4',
  orbitStrokeColor: '#DB0A5B',
  orbitStrokeWidth: 15,
  orbitRadius: 150,
  outerDistance: 100,
  speed: 0.003
};

export default Canvas;

import { getX, getY } from '../math';

const drawArc = (context, orbitRadius, outerDistance, angle, offset, color) => {
  const x = getX(angle + offset, orbitRadius + outerDistance);
  const y = getY(angle + offset, orbitRadius + outerDistance);

  context.lineWidth = 1;
  // context.strokeStyle = color;
  context.lineTo(x - 0, y - 0);
  context.stroke();

  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, 40, 0, Math.PI * 2, false);
  context.closePath();
  context.fill();
  context.fillStyle = 'white';
  context.textAlign = 'center';
  context.fillText(color, x, y + 3);

  context.beginPath();
  context.moveTo(x - 40, y - 40);
};

const draw = (
  context,
  angle, {
    children,
    orbitRadius,
    outerDistance,
    backgroundColor,
    width,
    height,
    speed
  }) => () => {
    const planets = children;
    context.save();

    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, width, height);

    context.translate(width / 2, height / 2);

    // context.strokeStyle = this.props.orbitStrokeColor;
    // context.lineWidth = this.props.orbitStrokeWidth;
    // context.beginPath();
    // context.arc(0, 0, orbitRadius, 0, Math.PI * 2, false);
    // context.stroke();
    // context.closePath();

    // context.moveTo(
    //   getX(angle, orbitRadius + outerDistance),
    //   getY(angle, orbitRadius + outerDistance)
    // );

    planets.map((planet, index) => {
      const offset = (Math.PI * 2) / planets.length * index;
      drawArc(
        context,
        orbitRadius,
        outerDistance,
        angle,
        offset,
        planet.props.color);
    });

    context.lineTo(
      getX(angle, orbitRadius + outerDistance),
      getY(angle, orbitRadius + outerDistance)
    );
    context.stroke();

    context.restore();

    angle += speed;
    window.requestAnimationFrame(
      draw(
        context,
        angle, {
          children,
          orbitRadius,
          outerDistance,
          backgroundColor,
          width,
          height,
          speed
        }
      )
    );
  };

export { draw };

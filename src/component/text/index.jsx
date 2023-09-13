import './text.css';

function Text({
  className,
  color,
  fontWeight,
  fontFamily,
  margin,
  padding,
  backgroundColor,
  border,
  children,
}) {
  const classes = `text ${className}`;
  const style = {
    color,
    fontWeight,
    fontFamily,
    margin,
    padding,
    backgroundColor,
    border,
  };
  return (
    <p className={classes} style={style}>
      {children}
    </p>
  );
}

export default Text;

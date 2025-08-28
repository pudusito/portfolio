import "./reactbits.css";

const StarBorder = ({
  as: Component = "div",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}) => {

  void Component; //usamos la variable sin hacer nada

  return (
    <Component
      className={`star-border-container ${className}`} 
      style={{
        padding: `${thickness}px 0`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content bg-transparent">{children}</div>
    </Component>
  );
};

export default StarBorder;

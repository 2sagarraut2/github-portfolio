const TitleComponentHOC = (TitleComponent) => {
  return ({ text, ...props }) => {
    return (
      <div>
        <div className="font-mono -tracking-wider text-xs mb-5">
          <span className="color-fg-muted d-inline-block">{text}</span>
        </div>
        <TitleComponent {...props} />
      </div>
    );
  };
};

export default TitleComponentHOC;

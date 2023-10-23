type ProgressBarProps = {
  progress: number;
};

function ProgressBar(props: ProgressBarProps) {
  const { progress } = props;

  const containerStyles = {
    height: 40,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 50,
    margin: 25,
  };

  const fillerStyles = {
    height: "100%",
    width: `${(progress * 100) / 4}%`,
    backgroundColor: "#e25788",
    borderRadius: "inherit",
    transition: "width 1s ease-in-out",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles} />
      </div>
    </div>
  );
}

export default ProgressBar;

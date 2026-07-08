const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-logo"></div>
            <div className="shimmer-name"></div>
            <div className="shimmer-cuisines"></div>
            <div className="shimmer-time"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

const Timer = () => {
  return (
    <div className="Timer text-center flex flex-column">
      <div className="my-2 flex shadow" style={timeContainerStyle}>
        <h1 className="xl ls-2">25:00</h1>
      </div>
      <p className="md my-3">Let's Get Started...</p>
      <button className="btn btn-primary md text-white fw-700 my-2 shadow">
        START SESSION
      </button>
    </div>
  );
};

const timeContainerStyle = {
  backgroundColor: "#fff",
  width: "15rem",
  height: "15rem",
  borderRadius: "50%",
  border: "1rem solid #FE9225",
};

export default Timer;

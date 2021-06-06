import { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState("25:00");
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const handleTimer = () => {
    if (isTimerRunning) return;

    setIsTimerRunning(!isTimerRunning);
    startTimer(25 * 60, setTime, () => setIsTimerRunning(false));
  };

  return (
    <div className="Timer text-center flex flex-column">
      <div className="my-2 flex shadow" style={timeContainerStyle}>
        <h1 className="xl ls-2">{time}</h1>
      </div>
      <p className="md my-3">Let's Get Started...</p>
      <button
        className="btn btn-primary md text-white fw-700 my-2 shadow"
        onClick={handleTimer}
      >
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

const startTimer = (duration, stateHandler, onFinish) => {
  let timer = duration;
  let minutes, seconds;
  let interval = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timer--;

    if (minutes === "00" && seconds === "00") {
      clearInterval(interval);
      onFinish();
    }

    stateHandler(`${minutes}:${seconds}`);
  }, 1000);
};

export default Timer;

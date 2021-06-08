import { useState } from "react";

const Timer = () => {
  const [timeDisplay, setTimeDisplay] = useState("25:00");
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);
  const [timer, setTimer] = useState(null);

  let caption = generateCaption(isTimerRunning, isWorkTime);

  const handleTimer = () => {
    if (isTimerRunning) {
      whenTimerFinished();
      clearInterval(timer);
      return;
    }

    setIsTimerRunning(!isTimerRunning);

    let newTimer = isWorkTime
      ? startTimer(25 * 60, setTimeDisplay, whenTimerFinished)
      : startTimer(5 * 60, setTimeDisplay, whenTimerFinished);
    setTimer(newTimer);
  };

  const whenTimerFinished = () => {
    setTimeDisplay("00:00");
    setIsTimerRunning(false);
    setIsWorkTime(!isWorkTime);
  };

  return (
    <div className="Timer text-center flex flex-column">
      <div className="my-2 flex shadow" style={timeContainerStyle}>
        <h1 className="xl ls-2">{timeDisplay}</h1>
      </div>
      <p className="md my-3">{caption}</p>

      <button
        className={
          "btn md text-white fw-700 my-2 shadow " +
          (isTimerRunning ? "btn-danger" : "btn-primary")
        }
        onClick={handleTimer}
      >
        {(isTimerRunning ? "FINISH " : "START ") +
          (isWorkTime ? "SESSION" : "BREAK TIME")}
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
  return interval;
};

const generateCaption = (timerRunning, workTime) => {
  if (timerRunning) {
    return workTime ? "You got this!" : "Enjoy your break ;)";
  } else {
    return workTime ? "Let's get started..." : "Hey, it's time for a break";
  }
};

export default Timer;

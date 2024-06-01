import React, { useEffect, useState } from "react";

const App = () => {
  const [days, setDays] = useState("1");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("1");
  const [reset, setReset] = useState(false);
  const [timerId, setTimerId] = useState(0);

  useEffect(() => {
    if (!reset) {
      if (seconds === 59) {
        setMinutes((minute) => (minute > 0 ? minute - 1 : 59));
      }
    }
  }, [seconds, reset]);

  useEffect(() => {
    if (!reset) {
      if (minutes === 59 && seconds === 59) {
        setHours((hour) => (hour > 0 ? hour - 1 : 23));
      }
    }
  }, [minutes, seconds, reset]);

  useEffect(() => {
    if (!reset) {
      if (minutes === 59 && seconds === 59 && hours === 23) {
        setDays((day) => (day > 0 ? day - 1 : 0));
      }
    }
  }, [minutes, seconds, hours, reset]);

  const handleStart = () => {
    if (!(days === 0 && hours === 0 && minutes === 0 && seconds === 0)) {
      const tId = setInterval(() => {
        setSeconds((second) => (second > 0 ? second - 1 : 59));
      }, 1000);
      setTimerId(tId);
    }
  };

  const handlePause = () => {
    clearInterval(timerId);
  };

  const handleReset = () => {
    clearInterval(timerId);

    setReset(true);
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div>
      <div className="flex gap-4 justify-center items-center mt-10">
        <div className="flex flex-col bg-black w-48 h-32 rounded-lg">
          <div className="text-white text-center mt-8 text-3xl">{days}</div>
          <div className="text-white text-center">Days</div>
        </div>
        <div className="flex flex-col bg-black w-48 h-32 rounded-lg">
          <div className="text-white text-center mt-8 text-3xl">{hours}</div>
          <div className="text-white text-center">Hours</div>
        </div>
        <div className="flex flex-col bg-black w-48 h-32 rounded-lg">
          <div className="text-white text-center mt-8 text-3xl">{minutes}</div>
          <div className="text-white text-center">Minutes</div>
        </div>
        <div className="flex flex-col bg-black w-48 h-32 rounded-lg">
          <div className="text-white text-center mt-8 text-3xl">{seconds}</div>
          <div className="text-white text-center">Second</div>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center mt-10">
        <button
          className="bg-black rounded-full text-white p-6 m-2"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="bg-black rounded-full text-white p-6 m-2"
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          className="bg-black rounded-full text-white p-6 m-2"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";

const App = () => {
  const [days, setDays] = useState("01");
  const [hours, setHours] = useState("01");
  const [minutes, setMinutes] = useState("40");
  const [seconds, setSeconds] = useState("10");

  const handleStart = () => {
    setInterval(() => {
      setSeconds((second) => (second > 0 ? second - 1 : 60));
    }, 1000);
  };

  const handleStop = () => {};
  const handleReset = () => {};

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
          onClick={handleStop}
        >
          Stop
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

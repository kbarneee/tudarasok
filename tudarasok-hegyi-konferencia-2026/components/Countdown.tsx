import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  nap?: number;
  óra?: number;
  perc?: number;
  másodperc?: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        nap: Math.floor(difference / (1000 * 60 * 60 * 24)),
        óra: Math.floor((difference / (1000 * 60 * 60)) % 24),
        perc: Math.floor((difference / 1000 / 60) % 60),
        másodperc: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval as keyof TimeLeft] === undefined) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg min-w-[70px] md:min-w-[90px]">
        <span className="text-3xl md:text-4xl font-bold">{timeLeft[interval as keyof TimeLeft]}</span>
        <span className="text-xs md:text-sm uppercase">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex space-x-2 md:space-x-4">
      {timerComponents.length ? timerComponents : <span>Az esemény elkezdődött!</span>}
    </div>
  );
};

export default Countdown;

import { useState, useRef, useEffect } from 'react';

interface TimerProps {
  testId?: string;
}

const Timer = ({ testId }: TimerProps) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function startTimer() {
    setRunning(true);
    setTime(0);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  }

  function stopTimer() {
    setRunning(false);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  }

  function formatTime() {
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}:${milliseconds < 10 ? '0' : ''}${milliseconds}`;
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === 'Space') {
        if (running) {
          stopTimer();
        } else {
          startTimer();
        }
      }
    }

    document.addEventListener('keyup', handleKeyDown);

    return () => {
      document.removeEventListener('keyup', handleKeyDown);
    };
  }, [running]);

  return (
    <div
      className="flex flex-col justify-center items-center h-full"
      onClick={() => (running ? stopTimer() : startTimer())}
      data-testid={testId}
    >
      <div className="flex text-8xl w-fit">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
};

export default Timer;
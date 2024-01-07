import { FC } from "react";
import { observer } from "mobx-react-lite";
import ClockFace from "../clockFace/ClockFace";
import timer from "../../store/store";
import styles from "./timer.module.css";

const TimerView: FC = () => {
  const onStart = () => {
    if (!timer.timerStarted) {
      timer.resetTimer();
      timer.setTimerStarted(true);
      timer.intervalID = setInterval(() => timer.increaseTimer(1), 1000);
    }
  };

  const onStop = () => {
    clearInterval(timer.intervalID);
    timer.setTimerStarted(false);
  };

  const title = timer.timerStarted ? "Timer is running" : "Timer";

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <ClockFace />
      <div className={styles.btns}>
        <button className={styles.btn} type="button" onClick={onStart}>
          Start
        </button>
        <button className={styles.btn} type="button" onClick={onStop}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default observer(TimerView);

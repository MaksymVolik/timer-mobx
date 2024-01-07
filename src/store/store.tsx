import { makeAutoObservable } from "mobx"

class Timer {
    timer: number = 0
    timerStarted: boolean = false
    intervalID: NodeJS.Timer | undefined = undefined

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer(interval: number) {
        this.timer = this.timer + interval
    }

    resetTimer() {
        this.timer = 0
    }

    setTimerStarted(condition: boolean) {
        this.timerStarted = condition
    }
};

const timer = new Timer();

export default timer;
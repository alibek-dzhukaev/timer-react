import {Formats} from "../types.ts";

const SECONDS_PER_MINUTE = 60
const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * 60
const SECONDS_PER_DAY = SECONDS_PER_HOUR * 24

export class TimerService {
    private static instance: TimerService | null

    public formattedTime(seconds: number) {
        const days = Math.floor(seconds / SECONDS_PER_DAY);
        seconds -= days * SECONDS_PER_DAY

        const hours = Math.floor(seconds / SECONDS_PER_HOUR);
        seconds -= hours * SECONDS_PER_HOUR;

        const minutes = Math.floor(seconds / SECONDS_PER_MINUTE);
        seconds -= minutes * SECONDS_PER_MINUTE;

        return {days, hours, minutes, seconds}
    }

    public toSeconds(time: number, format: Formats = Formats.SECONDS) {
        const actionsMap = {
            [Formats.DAYS]: () => this.daysToSeconds(time),
            [Formats.HOURS]: () => this.hoursToSeconds(time),
            [Formats.MINUTES]: () => this.minutesToSeconds(time),
            [Formats.SECONDS]: () => time,
        }

        return actionsMap[format]()
    }

    private daysToSeconds(time: number) {
        return time * SECONDS_PER_DAY;
    }

    private hoursToSeconds(time: number) {
        return time * SECONDS_PER_HOUR;
    }

    private minutesToSeconds(time: number) {
        return time * SECONDS_PER_MINUTE;
    }

    public static mounted() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

    public static destroyed() {
        if (this.instance) {
            this.instance = null
        }
    }
}
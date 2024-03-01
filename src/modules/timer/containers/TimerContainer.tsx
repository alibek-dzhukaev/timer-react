import {FC, memo} from "react";
import {Formats, TimerContainerProps} from "../types.ts";
import {Timer} from "../pages/Timer";
import {useTimer} from "../hooks/useTimer.ts";

export const TimerContainer: FC<TimerContainerProps> = memo((
    {
        title,
        time,
        format = Formats.SECONDS
    }
) => {
    const {days, hours, minutes, seconds} = useTimer(time, format)


    return (
        <Timer
            title={title}
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />
    )
})
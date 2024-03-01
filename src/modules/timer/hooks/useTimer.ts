import {Formats} from "../types.ts";
import {useTimerService} from "./useTimerService.ts";
import {useEffect, useState} from "react";

const TIME_INTERVAL = 1000

export const useTimer = (time: number, format: Formats) => {
    const timerService = useTimerService()

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        let timeLeft = timerService.toSeconds(time, format)

        const intervalId = setInterval(() => {
            if (timeLeft === 0) {
                clearInterval(intervalId)
            }

            const {days, hours, minutes, seconds} = timerService.formattedTime(timeLeft)

            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)

            timeLeft--
            timeLeft = timerService.toSeconds(timeLeft)
        }, TIME_INTERVAL)

        return () => {
            clearInterval(intervalId)
        }
    }, [format, time, timerService]);


    return { days, hours, minutes, seconds }
}
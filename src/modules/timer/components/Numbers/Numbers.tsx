import {FC, memo} from "react";
import classes from './Numbers.module.css'
import {Cell} from "../Cell";

interface Props {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export const Numbers: FC<Props> = memo(({days, hours, minutes, seconds}) => {
    return (
        <div className={classes.numbers}>
            <Cell value={days} subtitle="days"/>
            <Cell value={hours} subtitle="hours"/>
            <Cell value={minutes} subtitle="minutes"/>
            <Cell value={seconds} subtitle="seconds"/>
        </div>
    )
})
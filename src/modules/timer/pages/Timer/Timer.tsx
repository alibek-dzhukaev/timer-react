import {FC, memo} from "react";
import classes from './Timer.module.css';
import {Numbers} from "../../components/Numbers";
import {Title} from "../../components/Title";

interface Props {
    title: string
    days: number
    hours: number
    minutes: number
    seconds: number
}

export const Timer: FC<Props> = memo(({title, days, hours, seconds, minutes}) => {
    return (
        <div className={classes.timer}>
            <Title text={title}/>
            <Numbers
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        </div>
    )
})
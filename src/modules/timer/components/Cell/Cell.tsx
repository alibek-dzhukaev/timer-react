import {FC, memo} from "react";
import classes from './Cell.module.css'

interface Props {
    value: number
    subtitle: string
}

export const Cell: FC<Props> = memo(({subtitle, value}) => {
    return (
        <div className={classes.cell}>
            <div className={classes.cell_number}>{value}</div>
            <div className={classes.cell_subtitle}>{subtitle}</div>
        </div>
    )
})

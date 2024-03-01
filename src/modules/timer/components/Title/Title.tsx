import {FC} from "react";
import classes from './Title.module.css'

interface Props {
    text: string
}

export const Title: FC<Props> = ({text}) => {
    return (
        <h4 className={classes.title}>{text}:</h4>
    )
}
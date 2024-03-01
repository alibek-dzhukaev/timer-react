import {TimerContainer} from "./containers/TimerContainer.tsx";
import {FC} from "react";
import {TimerModuleProps} from "./types.ts";

export const TimerModule: FC<TimerModuleProps> = (props) => {
    return <TimerContainer {...props}/>
}
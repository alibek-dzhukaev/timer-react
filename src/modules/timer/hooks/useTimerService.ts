import {useEffect} from "react";
import {TimerService} from "../services/TimerService.ts";

export const useTimerService = () => {
    useEffect(() => {
        return () => {
            TimerService.destroyed()
        }
    }, []);

    return TimerService.mounted()
}
export interface TimerModuleProps {
    title: string
    time: number
    format: Formats
}

export type TimerContainerProps = TimerModuleProps

export const enum Formats {
    DAYS= 'days',
    HOURS = 'hours',
    MINUTES = 'minutes',
    SECONDS = 'seconds'
}
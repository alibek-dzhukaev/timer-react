import './App.css'
import {TimerModule} from "./modules/timer";
import {Formats} from "./modules/timer/types.ts";

function App() {

    return (
        <div className="app">
            <TimerModule
                time={4}
                format={Formats.DAYS}
                title="Countdown to my birthday"
            />
        </div>
    )
}

export default App

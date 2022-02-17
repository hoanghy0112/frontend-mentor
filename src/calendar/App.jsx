import "./App.scss";
import patternHills from "./images/pattern-hills.svg";

import Calendar from "./Calendar";
import { useLayoutEffect, useState } from "react";

function App() {
	const [timeData, setTimeData] = useState({});

	console.log({timeData});

	useLayoutEffect(() => {
		console.log("interval");
		const interval = setInterval(() => {
			const time = new Date(Date.now())
			const second = time.getSeconds()
			const minute = time.getMinutes()
			const hour = time.getHours()
			const day = time.getDay()
			setTimeData({second, minute, hour, day})
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<div className="App">
			<main>
				<h1>We're launching soon</h1>
				<div className="calendar-wrapper">
					<Calendar time={timeData.day || 0} title="days" isRun={false}></Calendar>
					<Calendar time={timeData.hour || 0} title="hours"></Calendar>
					<Calendar time={timeData.minute || 0} title="minutes"></Calendar>
					<Calendar time={timeData.second || 0} title="seconds"></Calendar>
				</div>
			</main>
			<img
				className="pattern-hills"
				src={patternHills}
				alt="Pattern Hills"
			></img>
		</div>
	);
}

export default App;

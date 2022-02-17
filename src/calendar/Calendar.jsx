import { useLayoutEffect, useEffect, useState, useRef } from "react";
import "./Calendar.scss";

function Calendar({ time, title, isRun = true }) {
	const [timeString, setTimeString] = useState(time);
	const topRun = useRef(null);
	const bottomRun = useRef(null);

	useLayoutEffect(() => {
		setTimeString({
			now: ("0" + Number.parseInt(time)).slice(-2),
			then: (
				"0" + (Number.parseInt(time) === 0 ? 59 : Number.parseInt(time) - 1)
			).slice(-2),
		});
		topRun.current?.classList.remove("run");
		bottomRun.current?.classList.remove("run");
		setTimeout(() => {
			topRun.current?.classList.add("run");
			bottomRun.current?.classList.add("run");
		}, 0);
		// topRun.current?.classList.add("run");
		// bottomRun.current?.classList.add("run");
		// setTimeout(() => {
		//    topRun.current?.classList.remove("run");
		// }, 600)
		// setTimeout(() => {
		//    bottomRun.current?.classList.remove("run");
		// }, 999)
	}, [time]);

	return (
		<div className="calendar">
			<div className="calendar-card">
				{isRun ? (
					<>
						<div ref={topRun} className="top running">
							<p>{timeString.then}</p>
						</div>
						<div ref={bottomRun} className="bottom">
							<p>{timeString.now}</p>
						</div>
						<div className="top ">
							<p>{timeString.now}</p>
						</div>
						<div className="bottom">
							<p>{timeString.then}</p>
						</div>
					</>
				) : (
					<>
						<div className="top ">
							<p>{timeString.now}</p>
						</div>
						<div className="bottom">
							<p>{timeString.now}</p>
						</div>
					</>
				)}
			</div>
			<p className="title">{title}</p>
		</div>
	);
}

export default Calendar;

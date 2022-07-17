import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

function Quiz({ uid }) {
	// let duration = 30;

	const [questions, setQuestions] = useState([]);
	const [duration, setDuration] = useState(0);

	useEffect(() => {
		getQuestions();
		getDuration();
	}, []);
	useEffect(() => {
		console.log(questions);
	}, [questions]);

	async function getQuestions() {
		const response = await fetch(
			`https://f383-122-170-130-112.ngrok.io/quiz/getquestionlist?quizid=${uid}`
		);
		const ques = await response.json();
		setQuestions(ques);
	}
	async function getDuration() {
		const response = await fetch(
			`https://f383-122-170-130-112.ngrok.io/quiz/getquiz/?quizid=${uid}`
		);
		const ques = await response.json();
		// console.log(ques)
		setQuestions(ques.duration);
	}

	useEffect(() => {
		setDuration((dur) => {
			return dur * 60000;
		});
	}, [duration]);

	return (
		<div className='w-3/5 h-4/5 bg-white rounded-xl shadow-xl'>
			<h1 className='w-full bg-green-400 text-center'>
				Time left : {duration && <Countdown date={Date.now() +duration} />}
			</h1>
		</div>
	);
}

export default Quiz;

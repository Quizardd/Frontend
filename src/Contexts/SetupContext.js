import React, { createContext, useState, useEffect } from "react";
export const SetupContext = createContext();
function SetupContextProvider({ children }) {
	// form1 start
	const [name, setName] = useState("");
	const [numberQuestions, setNumberQuestions] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [wrong, setWrong] = useState(0);
	const [shuffleQuestions, setShuffleQuestions] = useState(false);
	const [shuffleOptions, setShuffleOptions] = useState(false);
	const [start, setStart] = useState(Date.now());
	const [end, setEnd] = useState(Date.now());
	const [duration, setDuration] = useState(0);
	//form1 end
	const [form1, setForm1] = useState({});

	const[quizId, setQuizId] = useState(0)

	useEffect(() => {
		const data = {
			name: name,
			numberQuestions: numberQuestions,
			correct: correct,
			wrong: wrong,
			shuffleQuestions: shuffleQuestions,
			shuffleOptions: shuffleOptions,
			start: start,
			end: end,
			duration: duration,
		};
		setForm1(data);
		console.log(data)
	}, []);

	return (
		<SetupContext.Provider
			value={{
				quizId,
				name,
				setQuizId,
				start,
				setStart,
				end,
				setEnd,
				duration,
				setDuration,
				setName,
				numberQuestions,
				setNumberQuestions,
				correct,
				setCorrect,
				wrong,
				setWrong,
				shuffleQuestions,
				setShuffleQuestions,
				shuffleOptions,
				setShuffleOptions,
				form1,
				setForm1,
			}}>
			{children}
			{/* {console.log(form1)} */}
		</SetupContext.Provider>
	);
}

export default SetupContextProvider;

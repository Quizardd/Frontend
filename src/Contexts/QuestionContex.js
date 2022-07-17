import React, { createContext, useState } from "react";

export const QuestionContext = createContext();
function QuestionContextProvider({ children }) {
	const [question, setQuestion] = useState({});

	const [questionList, setQuestionList] = useState({});
	const [qNum, setQnum] = useState(1);

	return (
		<QuestionContext.Provider
			value={{
				question,
				setQuestion,
				questionList,
				setQuestionList,
				qNum,
				setQnum,
			}}>
			{children}
		</QuestionContext.Provider>
	);
}

export default QuestionContextProvider;

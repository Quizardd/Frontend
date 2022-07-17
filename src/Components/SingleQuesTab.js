import React, { useContext } from "react";

import { QuestionContext } from "../Contexts/QuestionContex";

export const SingleQuesTab = ({ i }) => {
	const { setQnum } = useContext(QuestionContext);
	return (
		<button
			onClick={() => {
				setQnum(i);
			}}
			className='h-[7%] w-full bg-[#dcdcdc] flex items-center px-4 mb-[3%] rounded-xl'>
			<h2 className='font-semibold tracking-wide text-[#7D7D7D]  '>
				Question {i}
			</h2>
		</button>
	);
};

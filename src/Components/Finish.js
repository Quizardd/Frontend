import React, { useContext } from "react";
import { SetupContext } from "../Contexts/SetupContext";

export const Finish = () => {
	const { quizId } = useContext(SetupContext);

	return (
		<div className='h-full w-full'>
			<h2 className='font-semibold text-lg'>
				{" "}
				Here is your final quiz link, share it and track quiz taker performance
			</h2>
			<br />
			<a
				href={`http://localhost:3000/user/${quizId}`}
				target='_blank'
				className=' p-4 w-4/5 rounded-xl  bg-red-100 font-semibold'>
				http://localhost:3000/user/{quizId}
			</a>
			<br />
			<br />
			<button
				className='bg-green-600  text-white rounded-xl p-4 w'
				onClick={() =>
					navigator.clipboard.writeText(`http://localhost:3000/user/${quizId}`)
				}>
				COPY LINK
			</button>
		</div>
	);
};

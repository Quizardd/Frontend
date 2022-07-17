import React, { useContext, useEffect, useState } from "react";
import { PageContext } from "../Contexts/PageContext";
import { SetupContext } from "../Contexts/SetupContext";
import { SingleQuesTab } from "./SingleQuesTab";
export const NewFromRight = () => {
	const { page, setPage } = useContext(PageContext);
	const { numberQuestions } = useContext(SetupContext);
	const [rows, setRows] = useState([]);

	useEffect(() => {
		if (numberQuestions) {
			let n = numberQuestions;
			for (let i = 1; i <= n; i++) {
				setRows((d) => {
					return [...d, <SingleQuesTab i={i} />];
				});
			}
		}
	}, [numberQuestions]);

	return (
		<div className='h-full w-full flex flex-col items-center p-4'>
			<button
				onClick={() => {
					setPage(1);
				}}
				className='h-[7%] w-full bg-[#F0F0F0] flex items-center px-4 mb-[3%] rounded-xl'>
				<h2 className='font-semibold tracking-wide text-[#7D7D7D] '>
					Name and Setup
				</h2>
			</button>
			<button
				onClick={() => {
					setPage(2);
				}}
				className='h-[7%] w-full bg-[#F0F0F0] flex items-center px-4 mb-[3%] rounded-xl'>
				<h2 className='font-semibold tracking-wide text-[#7D7D7D] '>
					Date, Time and Duration
				</h2>
			</button>
			<button
				onClick={() => {
					setPage(3);
				}}
				className='h-[7%] w-full bg-[#F0F0F0] flex items-center px-4 mb-[3%] rounded-xl'>
				<h2 className='font-semibold tracking-wide text-[#7D7D7D]  '>
					Questions
				</h2>
			</button>
			<div className='w-full h-4/5 overflow-auto bg-white pl-6'>
				{rows.map((d) => d)}
			</div>
			<button className='h-[7%] w-full bg-[#F0F0F0] flex items-center px-4 mb-[3%] rounded-xl'>
				<h2 className='font-semibold tracking-wide text-[#7D7D7D]  '>
					Save and Share
				</h2>
			</button>
		</div>
	);
};

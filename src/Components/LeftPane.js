import React, { useContext, useState } from "react";
import { PageContext } from "../Contexts/PageContext";
import { SetupContext } from "../Contexts/SetupContext";

export const LeftPane = ({ setSelected }) => {
	const [choosen, setChoosen] = useState("Live");
	const { setPage } = useContext(PageContext);

	const handleNew = () => {
		setChoosen("New");
		setSelected("New");
		setPage(1);
	};
	return (
		<div className='h-full p-4'>
			<button
				onClick={() => setChoosen("Past")}
				className='w-full h-[7%] bg-[#D53CBB] flex items-center justify-center rounded-xl'>
				<h2 className='font-semibold tracking-wide text-white text-lg '>
					Past Quizes
				</h2>
			</button>
			{choosen == "Past" && (
				<div className='w-full h-[72%] flex flex-col items-center justify-start overflow-auto '>
					<div className='min-h-[8%] w-[90%] bg-gray-200 rounded-xl mt-4'></div>
				</div>
			)}
			<button
				onClick={() => setChoosen("Upcoming")}
				className='w-full h-[7%] bg-[#B0FF8B] flex items-center justify-center rounded-xl'>
				<h2 className='font-semibold tracking-wide text-[#267800] text-lg '>
					Upcoming Quizes
				</h2>
			</button>
			{choosen == "Upcoming" && (
				<div className='w-full h-[72%] flex flex-col items-center justify-start overflow-auto '>
					<div className='min-h-[8%] w-[90%] bg-gray-200 rounded-xl mt-4'></div>
				</div>
			)}
			<button
				onClick={() => setChoosen("Live")}
				className='w-full h-[7%] bg-[#FF6A6A] flex items-center justify-center rounded-xl'>
				<h2 className='font-semibold tracking-wide text-white text-lg '>
					Live Quizes
				</h2>
			</button>
			{(choosen == "Live" || choosen == "New") && (
				<div className='w-full h-[72%] flex flex-col items-center justify-start overflow-auto '>
					<div className='min-h-[8%] w-[90%] bg-gray-200 rounded-xl mt-4'></div>
				</div>
			)}

			<button
				onClick={handleNew}
				className='w-full h-[7%] bg-[#6C63FE] flex items-center justify-center rounded-xl'>
				<h2 className='font-semibold tracking-wide text-white text-lg '>
					Create a new Quiz
				</h2>
			</button>
		</div>
	);
};

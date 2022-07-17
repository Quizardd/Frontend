import React, { useContext, useState } from "react";
import { SetupContext } from "../Contexts/SetupContext";

export const Setup = ({ setPage }) => {
	const {
		name,
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
	} = useContext(SetupContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setPage(2);
	};
	return (
		<form
			onSubmit={handleSubmit}
			className='h-full flex flex-col justify-evenly'>
			<div className='flex flex-col'>
				<label className='' for='Name'>
					Name your quiz
				</label>
				<input
					type='text'
					id='Name'
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Eg. Maths MTE-2022'
					className='bg-gray-100 w-2/3 p-2 rounded-xl'
				/>
			</div>
			<div className='flex flex-col'>
				<label className='' for='num'>
					Number of Questions
				</label>
				<input
					type='number'
					id='num'
					min={1}
					max={100}
					required
					value={numberQuestions}
					onChange={(e) => setNumberQuestions(e.target.value)}
					placeholder='Eg. 30'
					className='bg-gray-100 w-1/4 p-2 rounded-xl'
				/>
			</div>
			<div>
				<input
					type='checkbox'
					id='ques'
					defaultChecked={shuffleQuestions}
					onChange={() => setShuffleQuestions(!shuffleQuestions)}
				/>
				<label for='ques'> Shuffle Questions</label>
			</div>
			<div>
				<input
					type='checkbox'
					id='opt'
					defaultChecked={shuffleOptions}
					onChange={() => setShuffleOptions(!shuffleOptions)}
				/>
				<label for='opt'> Shuffle Options</label>
			</div>
			<div>
				<label for='correct'>Correct Answer Score</label>
				<input
					type='number'
					required
					placeholder='4'
					className='bg-gray-100 w-1/4 p-2 rounded-xl'
					id='correct'
					min='0'
					value={correct}
					onChange={(e) => setCorrect(e.target.value)}
				/>
			</div>
			<div>
				<label for='wrong'>Wrong Answer Score</label>
				<input
					type='number'
					required
					placeholder='1'
					className='bg-gray-100 w-1/4 p-2 rounded-xl'
					id='wrong'
					min='0'
					value={wrong}
					onChange={(e) => setWrong(e.target.value)}
				/>
			</div>
			<button
				type='submit'
				className='bg-primaryBlue w-1/4 rounded-2xl text-xl font-semibold text-white px-8 py-2'>
				{" "}
				Next{" "}
			</button>
		</form>
	);
};

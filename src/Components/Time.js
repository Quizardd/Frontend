import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { SetupContext } from "../Contexts/SetupContext";
import axios from "axios";

export const Time = ({ setPage }) => {
	const {
		name,
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
	} = useContext(SetupContext);
	const {quizId, setQuizId} = useContext(SetupContext)
	const handleEnd = (e) => {
		if (start && e.target.value < start) {
			toast.error("Ending Date should be greater than starting Date");
		} else {
			setEnd(e.target.value);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			title: name,
			nosofquestions: numberQuestions,
			correct: correct,
			wrong: wrong,
			shuffleQuestion: shuffleQuestions,
			shuffleOptions: shuffleOptions,
			start: start,
			end: end,
			duration: duration,
		};
		console.log(data);
		const uid = window.localStorage.getItem("uid");

		axios
			.post(
				`https://f383-122-170-130-112.ngrok.io/quiz/createquiz/?uid=${uid}`,
				data
			)
			.then(function (response) {
				console.log(response.data.id);
				setQuizId(response.data.id);
			})
			.catch(function (error) {
				console.log(error);
			});

		setForm1(data);
		setPage(3);
	};

	
	return (
		<form
			onSubmit={handleSubmit}
			className='h-full flex flex-col justify-evenly'>
			<div className='flex flex-col'>
				<ToastContainer />
				<label className='' for='startdate'>
					Starting Date
				</label>
				<input
					type='datetime-local'
					id='startdate'
					required
					value={start}
					onChange={(e) => setStart(e.target.value)}
					className='bg-gray-100 w-2/3 p-2 rounded-xl'
				/>
			</div>
			<div className='flex flex-col'>
				<label className='' for='enddate'>
					Ending Date
				</label>
				<input
					type='datetime-local'
					id='enddate'
					required
					value={end}
					onChange={handleEnd}
					className='bg-gray-100 w-2/3 p-2 rounded-xl'
				/>
			</div>
			<div>
				<label for='wrong'>
					Duration {"("}in minutes{")"}
				</label>
				<input
					type='number'
					required
					placeholder='30'
					className='bg-gray-100 w-1/4 p-2 rounded-xl'
					id='wrong'
					min='0'
					value={duration}
					onChange={(e) => setDuration(e.target.value)}
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

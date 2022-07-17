import React, { useContext, useEffect, useState } from "react";
import { PageContext } from "../Contexts/PageContext";
import { QuestionContext } from "../Contexts/QuestionContex";
import { SetupContext } from "../Contexts/SetupContext";
import axios from "axios";

export const Questions = () => {
	const { setQuestionList, questionList, qNum, setQnum } =
		useContext(QuestionContext);
	const { numberQuestions, quizId } = useContext(SetupContext);
	const { setPage } = useContext(PageContext);
	const uid = window.localStorage.getItem("uid");

	const [name, setName] = useState("");
	const [tags, setTags] = useState("");
	const [question, setQuestion] = useState("");
	const [option1, setOption1] = useState("");
	const [option2, setOption2] = useState("");
	const [option3, setOption3] = useState("");
	const [option4, setOption4] = useState("");
	const [answer1, setAnswer1] = useState(false);
	const [answer2, setAnswer2] = useState(false);
	const [answer3, setAnswer3] = useState(false);
	const [answer4, setAnswer4] = useState(false);

	const handleSubmit = () => {
		// e.preventDefault();
		const data = {
			name: name,
			tags: tags,
			question: question,
			option1: option1,
			option2: option2,
			option3: option3,
			option4: option4,
			answer1: answer1,
			answer2: answer2,
			answer3: answer3,
			answer4: answer4,
		};
		// console.log(data);

		// axios
		// 	.post(
		// 		`https://f383-122-170-130-112.ngrok.io/quiz/createquestion/?uid=${uid}&quizid=${quizId}`,
		// 		data
		// 	)
		// 	.then(function (response) {
		// 		console.log(response);
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});

		const newob = {};
		newob[qNum] = data;
		const newData = { ...questionList, ...newob };
		setQuestionList(newData);
	};

	useEffect(() => {
		setName(questionList[qNum]?.name || "");
		setTags(questionList[qNum]?.tags || "");
		setQuestion(questionList[qNum]?.question || "");
		setOption1(questionList[qNum]?.option1 || "");
		setOption2(questionList[qNum]?.option2 || "");
		setOption3(questionList[qNum]?.option3 || "");
		setOption4(questionList[qNum]?.option4 || "");
		setAnswer2(questionList[qNum]?.answer2 || false);
		setAnswer3(questionList[qNum]?.answer3 || false);
		setAnswer4(questionList[qNum]?.answer4 || false);
		setAnswer1(questionList[qNum]?.answer1 || false);
		// console.log(setAnswer2)
	}, [qNum]);

	return (
		<form className='h-full flex flex-col justify-evenly'>
			<div className='flex flex-col'>
				<label className='' for='qname'>
					Name of the Question
				</label>

				<input
					type='text'
					id='qname'
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
					className='bg-gray-100 w-full p-2 rounded-xl'
				/>
			</div>
			<div className='flex flex-col'>
				<label className='' for='q'>
					Question {qNum}
				</label>
				<input
					type='text'
					id='q'
					required
					value={question}
					onChange={(e) => {
						setQuestion(e.target.value);
					}}
					className='bg-gray-100 w-full p-2 rounded-xl'
				/>
			</div>

			<div className='flex flex-col w-full mx-8'>
				<div className='w-full flex justify-around'>
					<div className='w-2/5'>
						<label className='pl-4'>Option 1</label>
						<br />
						<div className='flex'>
							<input
								type='checkbox'
								checked={answer1}
								onChange={() => {
									setAnswer1(!answer1);
								}}
							/>
							<input
								type='text'
								className='bg-gray-100 w-full p-2 rounded-xl'
								required
								value={option1}
								onChange={(e) => {
									setOption1(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className='w-2/5'>
						<label className='pl-4'>Option 2</label>
						<br />
						<div className='flex'>
							<input
								type='checkbox'
								checked={answer2}
								onChange={() => {
									setAnswer2(!answer2);
								}}
							/>
							<input
								type='text'
								className='bg-gray-100 w-full p-2 rounded-xl'
								required
								value={option2}
								onChange={(e) => {
									setOption2(e.target.value);
								}}
							/>
						</div>
					</div>
				</div>
				<div className='w-full flex justify-around '>
					<div className='w-2/5'>
						<label
							className='pl-4'
							value={answer3}
							onChange={() => {
								setAnswer3(!answer3);
							}}>
							Option 3
						</label>
						<br />
						<div className='flex'>
							<input
								type='checkbox'
								checked={answer3}
								onChange={() => {
									setAnswer3(!answer3);
								}}
							/>
							<input
								type='text'
								value={option3}
								onChange={(e) => {
									setOption3(e.target.value);
								}}
								className='bg-gray-100 w-full p-2 rounded-xl'
								required
							/>
						</div>
					</div>
					<div className='w-2/5'>
						<label className='pl-4'>Option 4</label>
						<br />
						<div className='flex'>
							<input
								type='checkbox'
								checked={answer4}
								onChange={() => {
									setAnswer4(!answer4);
								}}
							/>
							<input
								type='text'
								value={option4}
								onChange={(e) => {
									setOption4(e.target.value);
								}}
								className='bg-gray-100 w-full p-2 rounded-xl'
								required
							/>
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col'>
				<label className='' for='tags'>
					Tags {"("} Comma sepeated {")"}
				</label>
				<input
					type='text'
					id='tags'
					placeholder='Linear Algebra, Trignometry, Calculus'
					required
					value={tags}
					onChange={(e) => setTags(e.target.value)}
					className='bg-gray-100 w-full p-2 rounded-xl'
				/>
			</div>

			<div className='flex justify-around'>
				{qNum > 1 && (
					<button
						type='button'
						onClick={() => {
							handleSubmit();
							setQnum((qnum) => {
								return qnum - 1;
							});
						}}
						className='bg-primaryBlue w-1/4 rounded-2xl text-xl font-semibold text-white px-8 py-2'>
						{" "}
						Prev Ques{" "}
					</button>
				)}

				{qNum == numberQuestions && (
					<button
						onClick={() => {
							setPage(4);
						}}
						type='button'
						className='bg-primaryBlue w-1/4 rounded-2xl text-xl font-semibold text-white px-8 py-2'>
						{" "}
						Finish Quiz{" "}
					</button>
				)}

				{qNum < numberQuestions && (
					<button
						onClick={() => {
							handleSubmit();
							setQnum((qnum) => {
								return qnum + 1;
							});
						}}
						type='button'
						className='bg-primaryBlue w-1/4 rounded-2xl text-xl font-semibold text-white px-8 py-2'>
						{" "}
						Next Ques{" "}
					</button>
				)}
			</div>
		</form>
	);
};

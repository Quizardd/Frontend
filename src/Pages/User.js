import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Quiz from "../Components/Quiz";

function User() {
	const params = useParams();
	const id = params.id;
	const [name, setName] = useState(() => {
		return window.localStorage.getItem("name") || "";
	});
	const [page2, setPage2] = useState(false);

	const handleSubmit = (e) => {
		window.localStorage.setItem("name", name);
		
		e.preventDefault();
		console.log(Date.now());
		setPage2(true);
	};

	return (
		<div className='w-full h-full flex items-center justify-center'>
			{!page2 && (
				<div className='h-3/5 w-2/3 rounded-xl drop-shadow-xl bg-red-400 p-8'>
					<h1 className='text-5xl font-bold text-center'>
						Please enter your name to start the quiz
					</h1>
					<form
						onSubmit={handleSubmit}
						className='w-full flex flex-col justify-center items-center'>
						<input
							className='bg-white w-4/5 p-2 rounded-2xl mt-14'
							value={name}
							required
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
						<button className='bg-green-400 w-2/5 text-green-800 p-2 rounded-2xl mt-14 text-2xl font-bold text-center'>
							Start
						</button>
					</form>
				</div>
			)}

			{page2 && <Quiz uid={id} />}
		</div>
	);
}

export default User;

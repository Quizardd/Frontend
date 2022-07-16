import React, { useEffect, useState } from "react";
import Biometric from "../Assets/biometric.gif";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [passwordOne, setPasswordOne] = useState("");
	const [passwordTwo, setPasswordTwo] = useState("");
	const [passMatch, setPassMatch] = useState(false);
	const auth = getAuth();

	const handlePassword = (e) => {
		setPasswordTwo(e.target.value);
	};

	useEffect(() => {
		if (passwordTwo != passwordOne) {
			setPassMatch(false);
		} else {
			setPassMatch(true);
		}
	}, [passwordTwo]);

	const handleSubmit = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, passwordOne)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
                window.localStorage.setItem('uid', user.uid);
			})
			.catch((error) => {
				const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
           
				// ..
			});
	};

	return (
		<div className='w-full h-full flex items-center justify-center'>
			<div className='h-4/5 w-[92%] flex'>
				<div className='h-full w-4/5 flex flex-col items-center justify-center'>
					<img src={Biometric} className='h-3/4' />
					<h3 className='mt-12 font-semibold'>Already have an account ?</h3>
					<a href='/login' className='font-semibold text-primaryBlue'>
						Log In
					</a>
				</div>
				<div className='h-full w-3/5 flex items-center justify-center'>
					<div className='bg-white drop-shadow-2xl rounded-xl h-full w-[90%] px-8 py-4 flex flex-col'>
						<h1 className='text-center text-primaryBlue text-4xl tracking-wider font-bold'>
							Sign Up
						</h1>
						<div className='grow flex flex-col items-center justify-around'>
							<form
								onSubmit={handleSubmit}
								className='grow w-full flex flex-col items-center justify-evenly'>
								<input
									type='email'
                                    required
                                    value={email}
                                    onChange = {(e)=>{setEmail(e.target.value)}}
									placeholder='Email'
									className='rounded-lg bg-[#EBEAFF] p-4 px-4 w-4/5'
								/>
								<input
									type='password'
									required
									placeholder='Password'
									value={passwordOne}
									onChange={(e) => {
										setPasswordOne(e.target.value);
									}}
									className='rounded-lg bg-[#EBEAFF] p-4 px-4 w-4/5'
								/>
								<div className='w-full flex flex-col items-center'>
									<input
										type='password'
										required
										placeholder='Confirm Password'
										value={passwordTwo}
										onChange={handlePassword}
										className='rounded-lg bg-[#EBEAFF] p-4 px-4 w-4/5'
									/>
									{!passMatch && (
										<h4 className='text-red-600'>Password does not match</h4>
									)}
								</div>

								{!passMatch ? (
									<button
										disabled
										className='rounded-2xl text-gray-400 bg-gray-200 p-4 px-4 w-4/5'>
										Sign Up
									</button>
								) : (
									<button
										type='submit'
										className='rounded-2xl text-white bg-[#6C63FE] p-4 px-4 w-4/5'>
										Sign Up
									</button>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;

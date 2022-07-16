import React from "react";
import Biometric from "../Assets/biometric.gif";
import Google from "../Assets/google.png";
const Login = () => {
	return (
		<div className='w-full h-full flex items-center justify-center'>
			<div className='h-4/5 w-[92%] flex'>
				<div className='h-full w-4/5 flex flex-col items-center justify-center'>
					<img src={Biometric} className='h-3/4' />
					<h3 className='mt-12 font-semibold'>Dont have an account ?</h3>
					<a href='/signup' className='font-semibold text-primaryBlue'>
						Sign up
					</a>
				</div>
				<div className='h-full w-3/5 flex items-center justify-center'>
					<div className='bg-white drop-shadow-2xl rounded-xl h-full w-[90%] px-8 py-4 flex flex-col'>
						<h1 className='text-center text-primaryBlue text-4xl tracking-wider font-bold'>
							Log In
						</h1>
						<div className='grow flex flex-col items-center justify-around'>
							<div className='p-2 px-6 w-4/5 bg-white drop-shadow-lg rounded-2xl flex items-center mt-12'>
								<img src={Google} />
								<div className='grow'>
									<h2 className='font-semibold text-[#4286F5] text-center tracking-wider'>
										{" "}
										Sign In with Google
									</h2>
								</div>
							</div>
							<h2 className='font-semibold text-xs text-slate-700 text-center tracking-wider my-12 mb-4'>
								Or Follow The Path Less Travelled
							</h2>
							<form className='grow w-full flex flex-col items-center justify-evenly'>
								<input
									type='email'
									required
									placeholder='Email'
									className='rounded-lg bg-[#EBEAFF] p-4 px-4 w-4/5'
								/>
								<input
									type='password'
									required
									placeholder='Password'
									className='rounded-lg bg-[#EBEAFF] p-4 px-4 w-4/5'
								/>
								<button
									type='submit'
									className='rounded-2xl text-white bg-[#6C63FE] p-4 px-4 w-4/5'>
									Log In
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

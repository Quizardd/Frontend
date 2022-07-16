import React, { useState } from "react";
import Biometric from "../Assets/biometric.gif";
import Google from "../Assets/google.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				window.localStorage.setItem("uid", user.uid);
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				alert(errorMessage);
				// ...
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user.uid);
				window.localStorage.setItem("uid", user.uid);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				if (error.code === "auth/wrong-password") {
					toast.error("Please check the Password");
				}
				if (error.code === "auth/user-not-found") {
					toast.error("Please check the Email");
				}
			});
	};

	return (
		<div className='w-full h-full flex items-center justify-center'>
			<ToastContainer />
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
							<div
								onClick={handleGoogle}
								className='p-2 px-6 w-4/5 bg-white drop-shadow-lg rounded-2xl flex items-center mt-12'>
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
							<form
								onSubmit={handleSubmit}
								className='grow w-full flex flex-col items-center justify-evenly'>
								<input
									type='email'
									required
									placeholder='Email'
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									className='rounded-lg bg-[#EBEAFF] p-4 px-4 w-4/5'
								/>
								<input
									type='password'
									required
									placeholder='Password'
									value={password}
									onChange={(e) => {
										setPassword(e.target.value);
									}}
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

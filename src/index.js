import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
const firebaseConfig = {
  apiKey: "AIzaSyBMKqXMnCCg4VbO_MbUnkARe81PPzTMmHc",
  authDomain: "quizard-5c13c.firebaseapp.com",
  projectId: "quizard-5c13c",
  storageBucket: "quizard-5c13c.appspot.com",
  messagingSenderId: "798837470451",
  appId: "1:798837470451:web:8ab73f4df54939a3b23386"
};
const app = initializeApp(firebaseConfig);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);


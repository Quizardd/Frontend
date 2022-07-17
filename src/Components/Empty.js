import React from "react";
import empty from "../Assets/empty.gif";
export const Empty = () => {
	return (
		<div className='h-full flex flex-col items-center justify-center'>
			<h3 className='text-4xl font-bold text-gray-700'>No quiz selected</h3>
			<img src={empty} className='h-3/5' />
			<h2 className='font-bold text-gray-700'>Choose from the left pane</h2>
			<h4 className='font-bold text-gray-700'>OR</h4>
			<h2 className='font-bold text-primaryBlue'>Create a new quiz</h2>
		</div>
	);
};

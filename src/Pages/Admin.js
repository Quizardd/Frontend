import React, { useState } from "react";
import { Empty } from "../Components/Empty";
import { LeftPane } from "../Components/LeftPane";
import { NewForm } from "../Components/NewForm";
import { NewFromRight } from "../Components/NewFromRight";

export const Admin = () => {
	const [selected, setSelected] = useState("");
	return (
		<div className='h-full w-full flex'>
			<div className='h-full w-1/5 bg-white rounded-3xl drop-shadow-2xl'>
				<LeftPane setSelected={setSelected} />
			</div>
			<div className='h-full w-3/5 '>
				{selected == "New" ? <NewForm /> : <Empty />}
			</div>
			<div className='h-full w-1/5 bg-white rounded-3xl drop-shadow-2xl'>
				{selected == "New" && <NewFromRight />}
			</div>
		</div>
	);
};

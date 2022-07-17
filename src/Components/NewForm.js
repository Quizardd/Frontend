import React, { useContext } from "react";
import {PageContext} from "../Contexts/PageContext"
import { Finish } from "./Finish";
import { Questions } from "./Questions";
import { Setup } from "./Setup";
import { Time } from "./Time";

export const NewForm = () => {
    
    const {page,setPage} = useContext(PageContext)

	return (
		<div className='h-full w-full flex items-center justify-center'>
			<div className='h-[90%] w-[90%] rounded-xl bg-white drop-shadow-xl p-8'>
				{page == 1 && <Setup setPage={setPage} />}
				{page == 2 && <Time setPage={setPage} />}
				{page == 3 && <Questions setPage={setPage} />}
				{page == 4 && <Finish setPage={setPage} />}
				
			</div>
		</div>
	);
};

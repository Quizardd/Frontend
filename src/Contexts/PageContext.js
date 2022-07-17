import React, { createContext, useState, useEffect } from "react";
export const PageContext = createContext();
function PageContextProvider({ children }) {
	const [page, setPage] = useState(1);
	return (
		<PageContext.Provider
			value={{
				page,
				setPage,
			}}>
			{children}
		</PageContext.Provider>
	);
}

export default PageContextProvider;

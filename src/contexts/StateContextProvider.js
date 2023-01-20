import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const baseUrl = "https://google-web-search1.p.rapidapi.com";

export const StateContextProvider = ({ children }) => {
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const getResults = async (url) => {
		setLoading(true);

		const res = await fetch(`${baseUrl}${url}`, {
			method: "GET",
			headers: {
				"X-RapidAPI-Host": "google-web-search1.p.rapidapi.com",
				"X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
			},
		});

		const data = await res.json();
		// console.log(data);
		setResults(data.results);
		setLoading(false);
	};

	return (
		<StateContext.Provider
			value={{ getResults, results, searchTerm, setSearchTerm, loading }}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);

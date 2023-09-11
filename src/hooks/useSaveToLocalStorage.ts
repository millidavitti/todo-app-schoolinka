/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef } from "react";

export function useSaveToLocalStorage(state: any, key: string) {
	const savedStateRef = useRef(state);

	useEffect(() => {
		savedStateRef.current = state;
	}, [state]);

	useEffect(() => {
		function saveToLocalStorage() {
			localStorage.setItem(key, JSON.stringify(savedStateRef.current));
		}

		saveToLocalStorage();
	}, [state]);
}

import { Dispatch, useEffect, useState } from "react";

export function useGetFromLocalStorage(
	key: string,
	dispatch: Dispatch<any | null>,
) {
	const [cache, setCache] = useState<string | undefined | null>(null);
	useEffect(() => {
		const savedState = localStorage.getItem(key);
		if (savedState) {
			setCache(savedState);
			if (dispatch)
				dispatch({ type: "local_storage", data: JSON.parse(savedState) });
		}
	}, [dispatch, key]);
	return cache;
}

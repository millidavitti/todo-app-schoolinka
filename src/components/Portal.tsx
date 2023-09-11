import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
	children: React.ReactNode;
	portal: string;
}

export function Portal({ children, portal }: PortalProps) {
	const ref = useRef<HTMLElement | null>(null);
	const count = useRef(0);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (count.current < 1) {
			count.current++;
			return;
		}

		const portalElement = document.createElement("div");
		portalElement.id = portal;
		document.body.appendChild(portalElement);
		return () => {
			if (portalElement.id === "side_bar") return;
			document.getElementById(portal)?.remove();
		};
	}, []);

	useEffect(() => {
		ref.current = document.getElementById(portal);
		setMounted(true);
	}, [portal]);

	return mounted ? createPortal(children, ref.current!) : null;
}

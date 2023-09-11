import React, { ReactNode } from "react";
import Section from "./Section";
import Container from "./Container";
import Ham from "@/icons/Icon.ham";
import Settings from "@/icons/icon.settings";
import BellOutline from "@/icons/Icon.bell_outline";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<main>
			<Section>
				<Container className='container w-full'>
					<header className='flex justify-between items-center sm:hidden'>
						<h1 className='font-bold text-2xl'>ToDo</h1>
						<Ham />
					</header>

					{/* Desktop */}

					<header className='hidden sm:flex justify-between py-4 pb-0'>
						<h1 className='font-bold text-2xl'>ToDo</h1>
						<Container className='flex w-full max-w-[100px]  justify-between items-center'>
							{/* Action */}

							<Settings className='w-[20px] h-[20px]' />
							<BellOutline className='w-[20px] h-20px] fill-[--icons]' />

							{/* Avatar */}

							<div className='w-[40px] flex-shrink-0 h-[40px] rounded-[50%] bg-slate-400 bg-[--avatar]'></div>
						</Container>
					</header>
				</Container>
			</Section>
			{children}
		</main>
	);
}

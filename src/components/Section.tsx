export default function Section(props: any) {
	return (
		<section className='flex justify-center w-full px-4 sm:px-8' {...props}>
			{props.children}
		</section>
	);
}

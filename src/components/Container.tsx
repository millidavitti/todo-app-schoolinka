export default function Container(props: any) {
	return (
		<div className='container w-full' {...props}>
			{props.children}
		</div>
	);
}

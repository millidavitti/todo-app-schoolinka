import LeftArrow from "@/icons/Icon.left_arrow";
import RightArrow from "@/icons/Icon.right_arrow";

export default function Pagination({
	pageNumber,
	globalState,
	globalStateDispatch,
}: any) {
	return (
		<div
			id='pagination'
			className='flex h-[60px] justify-between items-center w-full'
		>
			<p className='flex gap-2 items-center text-sm text-[--grey-600] cursor-pointer'>
				<span>
					<LeftArrow className='fill-[--grey-600]' />
				</span>
				Previous
			</p>
			<div id='page_numbers' className='flex justify-center'>
				<div className='rounded-[50%] w-[40px] h-[40px] text-center item-center flex items-center justify-center bg-[--outline] text-sm'>
					1
				</div>
				<div className='w-[40px] h-[40px] text-center flex items-center justify-center text-sm '>
					2
				</div>
				<div className='w-[40px] h-[40px] text-center item-center flex items-center text-sm justify-center'>
					3
				</div>
				<div className='w-[40px] h-[40px] text-center flex items-center justify-center text-sm '>
					4
				</div>
				<div className='w-[40px] h-[40px] text-center item-center flex items-center text-sm justify-center'>
					5
				</div>
				<div className='w-[40px] h-[40px] text-center flex items-center justify-center text-sm '>
					6
				</div>
			</div>
			<p
				className='flex gap-2 items-center text-sm text-[--grey-600] cursor-pointer'
				onClick={() =>
					globalStateDispatch({
						type: "load_more",
						pageNumber: ++pageNumber.current,
					})
				}
			>
				Next
				<span>
					<RightArrow className='fill-[--grey-600]' />
				</span>
			</p>
		</div>
	);
}

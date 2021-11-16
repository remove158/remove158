const Message = ({ message, createdAt, isSend, photoURL }: any) => {
	return (
		<div
			className={`flex  gap-2  ${
				isSend ? "flex-row-reverse" : "flex-row"
			}`}
		>
			<img
				className="rounded-full  w-12 h-12"
				src={photoURL}
				alt="user"
			/>
			<div
				title={createdAt?.toDate().toLocaleTimeString()}
				className="bg-blue-400 rounded-xl px-4 flex flex-wrap content-center text-white"
			>
				{message}
			</div>
		</div>
	);
};

export default Message;

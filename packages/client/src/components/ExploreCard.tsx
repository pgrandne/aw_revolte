export const ExploreCard = ({ id, imgUrl, title, status, index, handleClick }:
    {
        id: string,
        imgUrl: string,
        title: string,
        index: number,
        status: string,
        handleClick: any
    }) => {
    return (
        <button className={`flex flex-col items-center p-2 transition-colors duration-200 transform cursor-pointer group ${status === "closed" ? "hover:bg-blue-600" : "bg-gray-400"} rounded-xl`}
            onClick={handleClick}
        >
            <img
                src={imgUrl}
                alt={title}
                className="w-auto h-auto rounded"
            />
            <h1 className="mt-2 text-lg font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{title}</h1>
        </button>
    )
}
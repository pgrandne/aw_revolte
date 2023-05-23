import { Dispatch, SetStateAction } from "react";

export const Modal = ({ gift, setModal }: {
    gift: number
    setModal: Dispatch<SetStateAction<boolean>>
}) => {

    return (
        <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
            <div className="absolute bg-black opacity-80 inset-0 z-0 p-2"></div>
            <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                <div className="">
                    {/* <div className="text-center p-5 flex-auto justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 24 24" fill="currentColor" >
                            <path fillRule="evenodd" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>

                        {giftList.filter(element => element.id === gift).map(filteredElement => (
                            <div key={filteredElement.id}>
                                <h2 className="text-xl font-bold text-black py-4 ">{filteredElement.title}</h2>
                                <p className="text-sm text-gray-500 px-8">{filteredElement.text}</p>
                            </div>
                        ))}
                    </div> */}
                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                        <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
                            onClick={() => { setModal(false) }}
                        >cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { roadmapPic } from "../assets/img";

export const ModalProgression = ({ route }: { route: string }) => {
    const [loading, setLoading] = useState(false);

    return (
        <div className="bg-slate-900 bg-opacity-90 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-20">
            <div
                className={` bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 rounded-md text-center w-2/5`}
            >
                <div className="flex flex-col justify-center">
                    <p className="mb-4 font-bold ">Progression saved!</p>
                    <p className="mb-4 font-bold ">You can go to the next episode</p>
                </div>
                <button
                    className="flex bg-red-500  hover:bg-red-700 px-7 py-2 mx-auto rounded-md text-md text-white font-semibold"
                    onClick={() => {
                        setLoading(true);
                    }}
                >
                    {loading && (
                        <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="black"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    )}
                    {loading ? "Processing..." : "Next episode"}
                </button>
            </div>
        </div>
    );
};

export const ModalInfo = ({
    setModalInfo,
    deck,
}: {
    setModalInfo: Dispatch<SetStateAction<boolean>>;
    deck: boolean;
}) => {

    return (
        <div className="bg-slate-900 bg-opacity-60 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-50">
            <div
                className={` bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 rounded-md text-center w-4/5`}
            >
                <div className="flex justify-center">
                    {deck && (
                        <p className="inline font-sans sm:block text-sm md:text-xl my-4 font-bold">
                            <span className="font-permarker md:text-3xl">Revolte </span>{" "}
                            {"an interactive novel to onboard Web2 users to Web3"}
                        </p>
                    )}
                    {!deck && (
                        <p className="inline font-sans sm:block text-sm md:text-xl my-4 font-bold">
                            <span className="font-permarker md:text-3xl">Revolte </span>{" "}
                            "is an open source project. If you want to support us, you can make a donation at:"
                        </p>
                    )}
                </div>
                {deck && (
                    <p className="font-sans sm:block justify-center text-sm md:text-xl mb-4 font-bold ">
                        "Discover our Pitch Deck" ({" "}
                        <a
                            className="underline"
                            target="_blank"
                            href="https://www.canva.com/design/DAFaoOaGU3A/Jj8ILlofzMJ5_gv8nlivKg/view?utm_content=DAFaoOaGU3A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        >
                            "Online"{" "}
                        </a>{" "}
                        /{" "}
                        <a
                            className="underline"
                            target="_blank"
                            href="https://drive.google.com/uc?id=1heBnCKRaljTbxGf0CcZR3-e65KASU53A&export=download"
                        >
                            "Download"
                        </a>{" "}
                        )
                    </p>
                )}
                {!deck && (
                    <p className="font-sans sm:block justify-center text-xs md:text-base mb-4 font-bold ">
                        0x94b9420F65fB3ec966d96BB034b35AF86487D929
                    </p>
                )}
                <img
                    className="object-contain transform md:scale-75"
                    src={roadmapPic}
                    alt="roadmap"
                />
                <button
                    className="bg-red-500  hover:bg-red-700 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                    onClick={() => setModalInfo(false)}
                >
                    "Close"{" "}
                </button>
            </div>
        </div>
    );
};

import Image from "next/image";
import { personOne } from "../../assets/index";
export default function Header() {
    return (
        <header className='max-w-[calc(100%_-_224px)] w-full border-b border-neutral-200 fixed top-0 right-0 z-50 bg-white px-5 h-[65px] flex items-center'>
            <h4 className="text-base font-medium text-zinc-900">Home</h4>
            <div className="flex items-center ml-auto">
                <button className="text-zinc-700 bg-transparent relative w-fit block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                            <path strokeLinejoin="round" d="M18.934 14.98a3 3 0 0 1-.457-1.59V9.226a6.477 6.477 0 0 0-12.954 0v4.162a3 3 0 0 1-.457 1.592l-1.088 1.74a1 1 0 0 0 .848 1.53h14.348a1 1 0 0 0 .848-1.53z" />
                            <path d="M10 21.25h4" />
                        </g>
                    </svg>
                    <span className="size-2 border-2 border-white bg-red-500 rounded-full absolute right-0.5 top-0.5"></span>
                </button>
                <div className="flex items-center ml-6">
                    <div className="size-10 shrink-0 mr-2 relative before:w-full before:block before:pt-[100%]">
                        <Image src={personOne} alt="mission" className="size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-full" priority />
                    </div>
                    <h5 className="text-sm font-medium text-slate-950">Emon Pixels</h5>
                </div>
            </div>
        </header>
    );
}
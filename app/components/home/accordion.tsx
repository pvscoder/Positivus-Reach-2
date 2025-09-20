import {useEffect, useState } from "react";

export function Accordion({
    number= "",
    title= "",
    description= ""
}) {
    const [open, setOpen] = useState(false);
    return (
        <div className={"px-15 py-5 rounded-[50px] md:py-10.25 border rounded-[37px]  mt-7.5 border-b-[6px] "
            + (open ? "bg-[#B9FF66]" : "")
        }>
            <div className="flex justify-between">
                
                <div className="flex justify-start items-center gap-6.5">
                    <div className="font-medium text-4xl lg:text-6xl">{number}</div>
                    <div className="font-medium text-2xl lg:text-3xl">{title}</div>
                </div>
        
                <div className="flex">
                    <button className={"flex justify-center items-center bg-white border rounded-full hover:bg-[#f8f8f8] cursor-pointer w-14.5 h-14.5 "
                        + (open ? "hidden" : "")}
                        onClick={() => setOpen(true)}
                    >
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.6 25.08V15.36H0V9.72H9.6V0H15.48V9.72H25.08V15.36H15.48V25.08H9.6Z" fill="#191A23"/>
                        </svg>
                    </button>
            
                    <button className={"btn-sub flex justify-center items-center bg-white border rounded-full w-14.5 h-14.5 hover:bg-[#f8f8f8] cursor-pointer " +(open ? "" : "hidden")}
                        onClick={() => setOpen(false)}
                    >
                        <svg width="18" height="6" viewBox="0 0 18 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 5.64V0H17.76V5.64H0Z" fill="black"/>
                        </svg>
                    </button>
            
                </div>        
            </div>
    
            <div className={"font-normal pt-8 border-t mt-7.5 text-xl lg:text-2xl " + (open ? "block" : "hidden")}>
                {description}
            </div>
        </div>
    )
}
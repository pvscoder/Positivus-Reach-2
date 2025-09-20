import { useState } from "react";

const NavLink = ({
    title = "",
    link = ""
}) => (
    <li className="transition-transform duration-300 hover:scale-110 hover:text-[#686868]">
        <a href={link}>{title}</a>
    </li>
);

const NavBLink = () => (
    <>
        {
            [
                {title: "About us", link: "#" },
                {title: "Services", link: "#" },
                {title: "Use Cases", link: "#" },
                {title: "Pricing", link: "#" },
                {title: "Blog", link: "#" },

            ].map((item) => (
                <NavLink key={item.title} title={item.title} link={item.link}/>
            )
            )
        }
        <li className="hover:text-[#686868]">
            <a href="#">
                <button className="border py-4 px-8.75 rounded-lg cursor-pointer">
                    Request a quote
                </button>
            </a>
        </li>
    </>
);

export function Navberlink({
    active = ""
}) {
    const [open, setOpen] = useState(false);



    return (
        <>
        <header>
            <div className="container mt-15">
                <div className="flex justify-between items-center">
                    <div>
                        <a href="#">
                            <img src="img/logo/logo.svg" alt="" className="transition-transform duration-300  hover:scale-110"/>                        
                        </a>
                    </div>
                    <div className="hidden lg:block">
                    <ul className="font-normal text-xl flex items-center text-[#000000] gap-5 xl:gap-10">
                        <NavBLink />
                    </ul>
                    </div>

                        <button className="lg:hidden "
                        onClick={() => setOpen(true)}
                    >
                            <svg width="60" height="42" viewBox="0 0 250 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="10" y1="10" x2="240" y2="10" stroke="black" stroke-width="20" stroke-linecap="round"/>
                            <line x1="10" y1="80" x2="240" y2="80" stroke="black" stroke-width="20" stroke-linecap="round"/>
                            <line x1="10" y1="150" x2="240" y2="150" stroke="black" stroke-width="20" stroke-linecap="round"/>
                        </svg>          
                    </button>
                </div>
                <div>
                    <div className= {
                            "h-full w-80 bg-[#f9f9f9] fixed top-0 right-0 p-10 xl:hidden " + (open ? "" : "hidden")
                        }
                    >

                        <button
                            onClick={() => setOpen(false)}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5304 5.53033C19.8232 5.23744 19.8232 4.76256 19.5304 4.46967C19.2375 4.17678 18.7626 4.17678 18.4697 4.46967L12 10.9394L5.53033 4.46967C5.23744 4.17678 4.76256 4.17678 4.46967 4.46967C4.17678 4.76257 4.17678 5.23744 4.46967 5.53033L10.9394 12L4.4697 18.4697C4.1768 18.7626 4.1768 19.2374 4.4697 19.5303C4.76259 19.8232 5.23746 19.8232 5.53036 19.5303L12 13.0607L18.4697 19.5303C18.7626 19.8232 19.2374 19.8232 19.5303 19.5303C19.8232 19.2374 19.8232 18.7626 19.5303 18.4697L13.0607 12L19.5304 5.53033Z" fill="#2D264B"/>
                            </svg>
                        </button>
                        <ul className="font-normal text-xl flex flex-col items-center text-[#000000] gap-10">
                            <NavBLink />
                        </ul>
                        
                    </div>
                </div>
            </div>
        </header>

        </>
    )
}


import React, { useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { IoIosContact, IoIosMenu } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    React.useEffect(() => {
        const windowResize = () => {
            if (window.innerWidth > 1024 || window.innerWidth < 1024 && open) {
                setOpen(false);
            }
        }
        window.addEventListener('resize', windowResize);
    }, [open]);

    React.useEffect(() => {
        const scrollFunction = () => {
            if (window.scrollY > 0 && !scroll) {
                setScroll(true);
            } else if (window.scrollY === 0 && scroll) {
                setScroll(false);
            }
        }
        window.addEventListener('scroll', scrollFunction);
    }, [scroll]);
    return (
        <>
            <header className={`fixed bg-white w-full z-50 px-8 md:px-44 py-[24px] flex justify-between transition-[padding,box-shadow] duration-700 ${scroll ? 'shadow-lg py-[16px]' : ''}`}>
                <div className="font-bold text-xl cursor-default">Zayden<span className="text-primary">Store</span></div>
                <div className="swapper-navbar font-bold leading-tight items-center justify-center flex">
                    <a href="#" className="link link-underline link-underline-primary text-black">Home</a>
                    <a href="#products" className="link link-underline link-underline-primary text-black">Products</a>
                    <a href="#about" className="link link-underline link-underline-primary text-black">About</a>
                    <a href="#contact" className="link link-underline link-underline-primary text-black">Contact</a>
                </div>
                <div className="lg:hidden relative">
                    <IoIosMenu className="swapper-icon" onClick={() => setOpen(!open)} />
                </div>
            </header>
            <div className={`fixed w-full h-full bg-black bg-opacity-50 top-0 left-0 z-40 ${open ? 'block' : 'hidden'}`} onClick={() => setOpen(false)}>
                <IoIosMenu className="swapper-icon" />
            </div>
            <div className={`fixed bg-white w-[11rem] h-full top-0 right-0 z-50 transition-transform duration-700 transform ${open ? 'translate-x-0' : 'translate-x-full shadow-lg'}`}>
                <div className="flex flex-col h-full justify-center items-center space-y-24 text-xl">
                    <a href="#" className="link link-underline link-underline-primary text-black flex items-center w-32"><RiHome2Line className="m-4" /> Home</a>
                    <a href="#products" className="link link-underline link-underline-primary text-black flex items-center w-auto"><AiOutlineProduct className="m-4" /> Products</a>
                    <a href="#about" className="link link-underline link-underline-primary text-black flex items-center w-32"><SiAboutdotme className="m-4" /> About</a>
                    <a href="#contact" className="link link-underline link-underline-primary text-black flex items-center w-32"><IoIosContact className="m-4" />Contact</a>
                </div>
            </div>
        </>
    )
}   
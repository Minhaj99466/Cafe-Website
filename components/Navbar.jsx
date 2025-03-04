"use client"

import Link from "next/link";
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from "react";

function Navbar() {
    const [mobNav, setMobNav] = useState(false);

    const lists = [
        { title: "Home", Nav: "/home" },
        { title: "About", Nav: "/about" },
        { title: "Items", Nav: "/items" },
    ];

    const handleMobileView = () => {
        setMobNav(!mobNav);
    };

    return (
        <>
            <div className="nav container mx-auto px-10 lg:px-40 flex justify-between items-center py-4">
                <div className="nav-logo">
                    <h1 className="logo-text">
                        <Link href={"/"} >Sana Tea</Link>
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <div className="nav-list hidden md:block">
                    <ul className="flex gap-6">
                        {lists.map((item, index) => (
                            <li key={index}>
                                <Link href={item.Nav}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Toggler */}
                <button
                    className="md:hidden text-xl "
                    onClick={handleMobileView}
                >
                    {mobNav ? <XMarkIcon width={30} height={30} /> : <Bars3BottomLeftIcon width={30} height={30} />}
                </button>

                {/* Mobile Navigation */}
                <div className={`mob-nav fixed top-0 left-0 w-full h-full bg-[#928d81] text-white flex flex-col items-center justify-evenly transition-transform duration-300 ${mobNav ? "translate-x-0" : "-translate-x-full"}`}>
                    <h1 className="logo-text">
                        <Link href={"/"}>Sana Tea</Link>
                    </h1>
                    <button
                        className="absolute top-5 right-5 text-3xl"
                        onClick={handleMobileView}
                    >
                        <XMarkIcon width={40} height={40} />
                    </button>
                    <ul className="text-center">
                        {lists.map((item, index) => (
                            <li key={index} className="text-xl py-4">
                                <Link href={item.Nav} onClick={handleMobileView}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;

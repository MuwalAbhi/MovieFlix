import React from "react";
import { BiSearch, BiChevronDown, BiMenu } from "react-icons/bi";

function Navsm() {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl text-bold">It All Starts Here!</h3>
                    <span className="text-gray-400 text-xs flex items-center">
                        Jhansi, U.P. <BiChevronDown />
                    </span>
                </div>
                <BiSearch className="text-2xl" />
            </div>
        </>
    );
}

function Navmdlg() {
    return (
        <>
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex w-1/2 gap-3 items-center justify-between">
                    <div className="w-1/4 h-10">
                        <img
                            src="data:image/png;base64,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"
                            alt="logo"
                            className="w-full h-full cursor-pointer"
                        />
                    </div>
                    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-lg">
                        <BiSearch />
                        <input
                            type="search"
                            name="searchbox"
                            placeholder="Search for Movies, Events, Plays, Sports and Activities"
                            className="w-full outline-none bg-transparent"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-base flex items-center cursor-pointer hover:text-white">
                        Jhansi, U.P. <BiChevronDown />
                    </span>
                    <button className="bg-red-600 text-white border-4 font-bold border-red-600 rounded-md px-2 py-1 hover:bg-white hover:text-red-600">
                        Sign-In
                    </button>
                    <BiMenu className="ml-3 text-3xl text-white cursor-pointer" />
                </div>
            </div>
        </>
    );
}

function Navbar() {
    return (
        <>
            <nav className="bg-darkback-700 py-3">
                {/* Mobile view */}
                <div className="md:hidden px-4">
                    <Navsm />
                </div>

                {/* Tab and laptop view */}
                <div className="hidden md:flex w-full">
                    <Navmdlg />
                </div>
            </nav>
        </>
    );
}

export default Navbar;

import React, { useState } from "react";

const PopUp = () => {


    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full p-8 text-center relative">
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
                >
                    &times;
                </button>

                {/* Main Message */}
                <h1 className="text-3xl text-slate-900 font-bold font-serif text-gray-800 mb-[3rem]">
                    Great things are on the horizon
                </h1>

                {/* Sub Message */}
                <p className="text-amber-700 tracking-[.12rem] text-normal font-serif ">
                    Something big is brewing! My portfolio is in the works and will be
                    launching soon!
                </p>
            </div>
        </div>
    );
};

export default PopUp;

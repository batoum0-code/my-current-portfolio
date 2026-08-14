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
                    className="absolute top-1 right-3 text-gray-500 hover:text-gray-700 text-4xl"
                >
                    &times;
                </button>

                {/* Main Message */}
                <h1 className="text-2xl text-black font-bold font-samirFont py-[2rem]   mb-[3rem] leading-10">
                    My portfolio is still under construction 😅
                    But honestly, I’ve already built some pretty cool stuff.
                    Take a look around the rest is coming soon.
                </h1>


            </div>
        </div>
    );
};

export default PopUp;

import React from "react";

function Portfolio() {
    return (
        <div className="relative w-full h-full group">
            <img src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" className="w-full h-full cursor-pointer"/>
            <div className="absolute h-full w-full bottom-0 left-0 right-0 group-hover:bg-black opacity-80 flex flex-col items-center justify-center transition-all transition-duration:500ms">
                <h3 className="text-xl hover:text-red-500 text-white hidden group-hover:block opacity-100">
                    Hey, I Am The Big Boss</h3>
                <p className="text-sm text-transparent group-hover:text-white opacity-100">Some description text. Some dummy text here. Welcome to KindaCode.com</p>
            </div>
        </div>
    )
}

export default Portfolio;
import React from "react";

function PortfolioItem({title, imgUrl, stack, link}) {
    return (
        <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
        >
            <img src={imgUrl} alt="portfolio" className="w-full h-96 md:h-48 object-cover cursor-pointer"/>
            <div className="w-full">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flox-row items-center justify-start text-xs md:text-sm">
                    {stack.map(item => (
                            {item}
                    ))}
                </p>
            </div>
        </a>
    )
}

export default PortfolioItem;
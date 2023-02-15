import React from "react";

function PortfolioItem({title, imgUrl, stack, link}) {
    return (
        <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-neutral-500"
        >
            <img src={imgUrl} alt="portfolio" className="w-full h-96 md:h-48 object-cover cursor-pointer"/>
            <div className="w-full">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 dark:text-white font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flox-row items-center justify-start text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold dark:text-white border-2 border-neutral-900 dark:border-white rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    )
}

export default PortfolioItem;
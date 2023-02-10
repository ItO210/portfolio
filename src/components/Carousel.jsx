import { useState } from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

export default function Carousel(){

    const slides = portfolio.map(project => (
        <PortfolioItem
        imgUrl={project.imgUrl}
        title={project.title}
        stack={project.stack}
        link={project.link}
        />
    ));

    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(2);
    const [nextIndex, setNextIndex] = useState(1);

    const previous = () => {
        const newCurrentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newCurrentIndex);
        const newPreviousIndex = previousIndex === 0 ? slides.length - 1 : previousIndex - 1;
        setPreviousIndex(newPreviousIndex);
        const newNextIndex = nextIndex === 0 ? slides.length - 1 : nextIndex - 1;
        setNextIndex(newNextIndex);
    }

    const next = () => {
        const newCurrentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newCurrentIndex);
        const newPreviousIndex = previousIndex === slides.length - 1 ? 0 : previousIndex + 1;
        setPreviousIndex(newPreviousIndex);
        const newNextIndex = nextIndex === slides.length - 1 ? 0 : nextIndex + 1;
        setNextIndex(newNextIndex);
    }

    return(
        <div>
            <div className="flex items-center justify-center">
                <div className="opacity-25 w-1/4 mx-2 border border-neutral-900 dark:border-white rounded-md overflow-hidden duration-500">{slides[previousIndex]}</div>
                <div className="w-1/2 py-9 mx-2 border border-neutral-900 dark:border-white rounded-md overflow-hidden duration-500">{slides[currentIndex]}</div>
                <div className="opacity-25 w-1/4 mx-2 border border-neutral-900 dark:border-white rounded-md overflow-hidden duration-500">{slides[nextIndex]}</div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center">                
                <button onClick={previous}>{"<"}</button>
                <button onClick={next}>{">"}</button>
            </div>
        </div>
    )
}
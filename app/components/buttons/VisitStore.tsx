'use client';

import { useState } from "react";
import { RightArrow } from "../icons";

function VisitStore() {
    const [isHovered, setIsHovered] = useState(false);
    const [arrowClass, setArrowClass] = useState('hide')

    const mouseOverHandler = () => {
        console.log('im called')
        setIsHovered(true);
    }

    const mouseLeaveHandler = () => {
        setIsHovered(false)
    }

    console.log(isHovered)

    return (
        <button
            aria-describedby='button'
            className={`z-[3000] bg-[#4444444D] rounded-full w-[178px] h-[48px] flex items-center justify-center text-white border-[1px] border-[#CBCBCB]`}
            onMouseOver={mouseOverHandler}
            onMouseLeave={mouseLeaveHandler}
            onClick={() => console.log('im called')}
        >
            <div className={` ${isHovered ? 'visitStoreButtonEnterAnimation' : 'visitStoreButtonExitAnimation'}`}>
                Visit our store
            </div>
            <span className={`ml-[7.5px] ${isHovered ? 'show' : 'hide'}`}

            >
                <RightArrow />
            </span>
        </button>
    )
}

export default VisitStore
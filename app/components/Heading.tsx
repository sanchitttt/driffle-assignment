import React from 'react'

function Heading({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className='text-main text-[64px] font-bold text-center leading-[14.52px]'>
            {children}
        </div>
    )
}

export default Heading
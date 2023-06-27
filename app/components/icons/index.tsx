import Image from 'next/image'
import React from 'react'

export function Logo() {
    return (
        <button>
            <Image
            src='/logo.svg'
            width={122}
            height={30}
            alt='Driffle Logo'
        />
        </button>
    )
}

export function LikeIcon() {
    return <button>
        <Image
            src='/like.svg'
            width={20}
            height={18.5}
            alt='like icon'
        />
    </button>
}
export function CartIcon() {
    return <button>
        <Image
            src='/cart.svg'
            width={20}
            height={18.5}
            alt='like icon'
        />
    </button>
}


export function ProfileIcon() {
    return <button>
        <Image
            src='/profile.svg'
            width={20}
            height={21}
            alt='like icon'
        />
    </button>
}

export function GlobeIcon() {
    return <button>
        <Image
            src='/globeIcon.svg'
            width={20}
            height={20}
            alt='globe icon'
        />
    </button>
}
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { buttonVariants } from "@/components/ui/button"

const Button = () => {
    const [isAuto, setisAuto] = useState(false);
    const [isBalanced, setisBalanced] = useState(false);
    const [isStable, setisStable] = useState(false);
    const [isPretty, setisPretty] = useState(false);
    const [isReset, setisReset] = useState(false);

    const handleAutoChange = () => {
        setisAuto(!isAuto);
    };
    const handleBalanceChange = () => {
        setisBalanced(!isBalanced);
    };
    const handleStableChange = () => {
        setisStable(!isStable);
    };
    const handlePrettyChange = () => {
        setisPretty(!isPretty);
    };
    const handleResetChange = () => {
        setisReset(!isReset);
    };
    return (
        <div className='flex flex-col items-center'>
            <div className='mt-2 mb-2 font-mono text-slate-600'>
                <span aria-hidden="true">&darr;{' '}</span>
                Choose one 'text-wrap-style' property
                <span aria-hidden="true">{' '}&darr;</span>
            </div>
            <div className='flex flex-row cursor-pointer items-center relative'>
                <div className='p-4'>
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger >auto</MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger >balance</MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger >stable</MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger >pretty</MenubarTrigger>
                        </MenubarMenu>
                    </Menubar>
                </div>
                <div className='p-4'>
                    <Link href="#" className={buttonVariants({ variant: "destructive" })}>RESET</Link>
                </div>
            </div>
            <div className='flex flex-row mt-5 mb-5 items-center justify-center text-center'>
                <div className='items-center justify-center'>
                    <h2 className="mb-6 max-w-4xl text-3xl font-semibold md:text-3xl lg:text-3xl">
                        <span className="font-mono font-light text-green-600"> balance </span>
                        Text
                    </h2>
                    <>
                        <h5 className="max-w-3xl text-md font-medium md:text-md lg:text-md">
                            <p className='h5-with-auto'>Artificial Intelligence (AI) stands as a transformative frontier in technology, enabling machines to
                                mimic human intelligence in tasks like learning, problem-solving, and decision-making. With machine
                                learning and sophisticated algorithms, AI has become adept at recognizing patterns, from image and
                                speech recognition to personalized recommendations.
                            </p>
                        </h5>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Button;

'use client'

import React, { useState } from 'react';

const Button = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='flex flex-col items-center'>
            <label className='flex cursor-pointer select-none items-center'>
                <div className='relative'>
                    <input
                        type='checkbox'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className='sr-only'
                    />
                    <div
                        className={`box block h-8 w-14 rounded-full ${isChecked ? 'bg-slate-200' : 'bg-slate-800'
                            }`}
                    ></div>
                    <div
                        className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black transition ${isChecked ? 'translate-x-full' : ''
                            }`}
                    ></div>
                </div>
            </label>
            <div className='flex flex-row mt-10 items-center justify-center text-center'>
                <div className='items-center justify-center'>
                    <h2 className="mb-6 max-w-4xl text-3xl font-bold md:text-3xl lg:text-3xl">
                        {isChecked ? <span className="text-blue-600"> Balanced </span> : <span className="text-red-600"> Unbalanced </span>}
                        Text
                    </h2>
                    <h5 className="max-w-4xl break-normal items-center text-md font-light md:text-md lg:text-md">
                        {isChecked ?
                            <p className='h5-with-balance'>Artificial Intelligence (AI) stands as a transformative frontier in technology, enabling machines to
                                mimic human intelligence in tasks like learning, problem-solving, and decision-making. With machine
                                learning and sophisticated algorithms, AI has become adept at recognizing patterns, from image and
                                speech recognition to personalized recommendations.</p>
                            :
                            <p className='h5'>Artificial Intelligence (AI) stands as a transformative frontier in technology, enabling machines to
                                mimic human intelligence in tasks like learning, problem-solving, and decision-making. With machine
                                learning and sophisticated algorithms, AI has become adept at recognizing patterns, from image and
                                speech recognition to personalized recommendations.</p>
                        }
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Button;

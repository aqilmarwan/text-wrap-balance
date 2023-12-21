'use client'

import React, { useState, useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';

const Button = () => {
    const [textWrapStyle, setTextWrapStyle] = useState<string | null>(null);
    const [currentStyle, setCurrentStyle] = useState<string | null>(null);

    const handleStyleChange = (style: string) => {
        setTextWrapStyle((prevStyle) => (prevStyle === style ? null : style));
        setCurrentStyle(style);
    };

    const [textContent, setTextContent] = useState(
        "Default text content here..."
    );

    const monacoEditorStyles: Record<string, string> = {
        default: `.h5 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
}`,
        auto: `.h5 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
        text-wrap: auto;
}`,
        balance: `.h5 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
        text-wrap: balance;
}`,
        stable: `.h5 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
        text-wrap: stable;
}`,
        pretty: `.h5 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
        text-wrap: pretty;
}`,
    };

    useEffect(() => {
    }, [textWrapStyle]);

    return (
        <div className='flex flex-col items-center'>
            <div className='mt-2 mb-2 font-mono text-slate-600'>
                <span aria-hidden="true">&darr;{' '}</span>
                Choose one 'text-wrap-style' property.
                <span aria-hidden="true">{' '}&darr;</span>
            </div>
            <div className='flex flex-row cursor-pointer items-center relative'>
                <div className='p-4'>
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        <button type="button" onClick={() => handleStyleChange('auto')} className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            auto
                        </button>
                        <button type="button" onClick={() => handleStyleChange('balance')} className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-r border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            balance
                        </button>
                        <button type="button" onClick={() => handleStyleChange('stable')} className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            stable
                        </button>
                        <button type="button" onClick={() => handleStyleChange('pretty')} className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            pretty
                        </button>
                        <div className='ml-2'>
                            <button type="button" onClick={() => handleStyleChange('')} className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent hover:bg-blue-500 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded-s-lg rounded-e-lg">
                                normal text
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row mt-6 mb-5 items-center justify-center text-center'>
                <div className='items-center justify-center'>
                    <h2 className="mb-3 max-w-4xl text-3xl font-semibold md:text-3xl lg:text-3xl">
                        {currentStyle && (
                            <span className={`font-mono font-light text-green-600`}>{currentStyle}</span>
                        )}
                        {' '}Text
                    </h2>
                    <>
                        <h5 className="max-w-3xl text-md font-medium md:text-md lg:text-md">
                            {currentStyle === 'auto' && (
                                <p className='h5-with-auto'>
                                    AI is revolutionizing technology, allowing machines to emulate human intelligence in learning, problem-solving, and decision-making. Through advanced algorithms and machine learning, AI excels at recognizing patterns, including image and speech recognition, and providing personalized recommendations.                                </p>
                            )}
                            {currentStyle === 'balance' && (
                                <p className='h5-with-balance'>
                                    AI is revolutionizing technology, allowing machines to emulate human intelligence in learning, problem-solving, and decision-making. Through advanced algorithms and machine learning, AI excels at recognizing patterns, including image and speech recognition, and providing personalized recommendations.                                </p>
                            )}
                            {currentStyle === 'stable' && (
                                <p className='h5-with-stable'>
                                    AI is revolutionizing technology, allowing machines to emulate human intelligence in learning, problem-solving, and decision-making. Through advanced algorithms and machine learning, AI excels at recognizing patterns, including image and speech recognition, and providing personalized recommendations.                                </p>
                            )}
                            {currentStyle === 'pretty' && (
                                <p className='h5-with-pretty'>
                                    AI is revolutionizing technology, allowing machines to emulate human intelligence in learning, problem-solving, and decision-making. Through advanced algorithms and machine learning, AI excels at recognizing patterns, including image and speech recognition, and providing personalized recommendations.                                </p>
                            )}
                            {!currentStyle && (
                                <p className='h5'>
                                    AI is revolutionizing technology, allowing machines to emulate human intelligence in learning, problem-solving, and decision-making. Through advanced algorithms and machine learning, AI excels at recognizing patterns, including image and speech recognition, and providing personalized recommendations.                                </p>
                            )}
                        </h5>
                    </>
                </div>
            </div>
            <div className='mt-6 mb-5 items-center justify-center text-center'>
                <h2 className="mb-3 max-w-4xl text-3xl font-semibold md:text-3xl lg:text-3xl">
                    CSS Syntax
                </h2>
            </div>
            <>
                {currentStyle && (
                    <MonacoEditor
                        key={monacoEditorStyles[currentStyle]}
                        className="monaco-editor mb-12"
                        height="40vh"
                        width="40%"
                        theme="vs-dark"
                        language="css"
                        defaultValue={monacoEditorStyles[currentStyle]}
                        options={{
                            minimap: { enabled: false },
                            scrollBeyondLastLine: false,
                            wordWrap: 'on',
                            lineNumbers: 'on',
                            glyphMargin: false,
                            contextmenu: false,
                            rulers: [],
                        }}
                    />
                )}
                {!currentStyle && (
                    <MonacoEditor
                        key={monacoEditorStyles.default}
                        className="monaco-editor mb-12"
                        height="40vh"
                        width="40%"
                        theme="vs-dark"
                        language="css"
                        defaultValue={monacoEditorStyles.default}
                        options={{
                            minimap: { enabled: false },
                            scrollBeyondLastLine: false,
                            wordWrap: 'on',
                            lineNumbers: 'on',
                            glyphMargin: false,
                            contextmenu: false,
                            rulers: [],
                        }}
                    />
                )}
            </>
        </div>
    );
};

export default Button;

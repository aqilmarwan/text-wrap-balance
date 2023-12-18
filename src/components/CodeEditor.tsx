'use client'

import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react'

export default function CodeEditor() {
    return (
        <div className='flex flex-col items-center'>
            <div className='mt-5 mb-5 items-center justify-center text-center'>
                <h2 className="mb-6 max-w-4xl text-3xl font-semibold md:text-3xl lg:text-3xl">
                    CSS Syntax
                </h2>
            </div>
            <MonacoEditor
                className="monaco-editor mb-12"
                height="40vh"
                width="40%"
                theme="vs-dark"
                language="typescript"
            />
        </div>
    );
}
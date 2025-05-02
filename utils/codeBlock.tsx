'use client'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useTheme } from 'next-themes'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import ts from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/markup'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import sql from 'react-syntax-highlighter/dist/cjs/languages/prism/sql'

SyntaxHighlighter.registerLanguage('javascript', js)
SyntaxHighlighter.registerLanguage('typescript', ts)
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('html', html)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('sql', sql)

interface CodeBlockProps {
    code: string
    language?: string
}

export default function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
    const { resolvedTheme } = useTheme()
    const style = resolvedTheme === 'dark' ? materialDark : materialLight

    return (
        <div className="my-6 overflow-auto rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm">
            <SyntaxHighlighter
                language={language}
                style={style}
                showLineNumbers
                wrapLines={false}
                codeTagProps={{ style: {backgroundColor: "transparent"} }}
                customStyle={{
                    backgroundColor: 'transparent',
                    padding: '1rem',
                    margin: 0,
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    )
}

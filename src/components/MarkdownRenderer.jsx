import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ content }) => {
    // <article className="prose max-w-none">
    //     <ReactMarkdown remarkPlugins={[remarkGfm]}>
    //         {content}
    //     </ReactMarkdown>
    // </article>
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    table({ node, ...props }) {
                        return <table style={{
                            borderCollapse: 'collapse',
                            width: '100%',
                            margin: '16px 0',
                            border: '1px solid #ddd'
                        }} {...props} />
                    },
                    th({ node, ...props }) {
                        return <th style={{
                            border: '1px solid #ddd',
                            padding: '12px',
                            textAlign: 'left',
                            backgroundColor: '#f2f2f2'
                        }} {...props} />
                    },
                    td({ node, ...props }) {
                        return <td style={{
                            border: '1px solid #ddd',
                            padding: '8px'
                        }} {...props} />
                    },
                    h1({ node, ...props }) {
                        return <h1 style={{ fontSize: '2em', margin: '0.67em 0' }} {...props} />
                    },
                    h2({ node, ...props }) {
                        return <h2 style={{ fontSize: '1.5em', margin: '0.83em 0' }} {...props} />
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default MarkdownRenderer;
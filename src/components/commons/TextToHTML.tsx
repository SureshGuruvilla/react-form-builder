import React from 'react'

interface TextToHTMLProps{
    text: string;
}

function TextToHTML({ text }: TextToHTMLProps) {
    return (
        <span dangerouslySetInnerHTML={{ __html: text }} />
      );
}

export default TextToHTML
import React, {useState,useRef} from 'react'

import './WordCount.css' 
function WordCount() {
    const textAreaRef = useRef();
    const [wordCount,setWordCount] = useState(0);

    const countWords = (e) => {
        const text = textAreaRef.current.value;
        setWordCount(text.split(" ").length);
    }

    return (
        <>
        <div className='wordcount'>
            <div className='title'>
                <h1>Responsive Paragraph Word Counter</h1>
            </div>
            <div className='textarea'>
            <textarea ref={textAreaRef} rows="3" cols="45" placeholder='Enter the Text'/><br />
            </div><br/>
            <div className='button'>
            <button  onClick={countWords}>Count Words</button><br/>
            </div>
            <div className='results'>
            <p> Word Count: {wordCount}</p>
            </div>
            
            
        </div>
            
        </>
    )
}

export default WordCount

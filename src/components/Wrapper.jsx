import React, { useEffect } from 'react'

export default function Wrapper({ data, color, newQuote }) {
    const myStyle = {
        backgroundColor: "white",
        color: color
    }

    useEffect(() => {
        document.querySelector(".quote-text").classList.toggle("animation");
        document.querySelector(".quote-author").classList.toggle("animation");
        document.querySelector("#new-quote").disabled = true;

        // bloquear boton
        setTimeout(
            function () {
                document.querySelector(".quote-text").classList.toggle("animation");
                document.querySelector(".quote-author").classList.toggle("animation");
                document.querySelector("#new-quote").disabled = false;
            }, 2000);
    }, [data]);

    return (
        <div id="quote-box" style={myStyle}>
            <div className='quote-text'><i className="fa fa-quote-left"></i><span id='text'>{data.quote}</span></div>
            <div className='quote-author'>-<span id="author">{data.author}</span></div>
            <div className='buttons'>
                <a className='button' id="tweet-quote" href={`https://twitter.com/intent/tweet?${data.quote}`} style={{ backgroundColor: color }} target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                <a className='button' id="tumblr-quote" href="https://www.tumblr.com/" style={{ backgroundColor: color }} target="_blank" rel="noreferrer"><i className="fa-brands fa-tumblr"></i></a>
                <button className='button' id="new-quote" onClick={newQuote} style={{ backgroundColor: color }}>New quote</button>
            </div>
        </div>
    )
}

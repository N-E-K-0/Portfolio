import React from 'react';

const Footer = () => {
  return (
    <div className="container px-5 py-2 mx-auto">
        <span class="inline-flex items-baseline">
            <span>Made with</span>&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"  fill="#e25555"/>
            </svg>&nbsp;
            <span> by Samiul</span>
        </span>
    </div>
  )
}

export default Footer
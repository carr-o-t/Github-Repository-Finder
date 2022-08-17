import React from 'react'

function Button({ btnContent, bgColor}) {
    return (
        <div className={`p-1 text-white text-sm rounded-md bg-blue-500`}>
            {btnContent}
        </div>
    )
}

export default Button
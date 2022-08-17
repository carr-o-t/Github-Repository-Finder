import React from 'react'

function SkeletonLoader() {
    return (
        <div className="bg-white shadow-lg rounded-md px-2 py-4 h-32 max-w-sm w-[calc(100vw_-_64px)] mx-auto">
            <div className="animate-pulse">
                <div className="h-2 bg-gray-400 mb-4 rounded"></div>
                <div className="flex-1 space-y-2 py-1 mb-1">
                    <div className="h-2 bg-gray-400 rounded col-span-2"></div>
                    <div className="h-2 bg-gray-400 rounded"></div>
                    <div className="h-2 bg-gray-400 rounded col-span-2"></div>
                </div>
                <div className="flex-1 py-1">
                    <button className='h-6 w-12 rounded-md bg-gray-400 '></button>
                </div>
            </div>
        </div>
    )
}

export default SkeletonLoader
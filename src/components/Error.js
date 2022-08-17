import React from 'react'
import { ReactComponent as ErrorSvg } from '../assets/svgs/404.svg'

function Error() {
    return (
        <div className="flex flex-col space-y-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ErrorSvg className="h-28 w-auto sm:h-40 lg:h-48 " />
        </div>
    )
}

export default Error
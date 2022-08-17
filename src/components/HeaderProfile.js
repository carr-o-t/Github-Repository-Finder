import React from 'react'
import { LocationMarkerIcon, LinkIcon } from '@heroicons/react/solid'
import { ReactComponent as TwitterIcon } from '../assets/svgs/github.svg'

function HeaderProfile({ userdata, user }) {
    return (
        <div className="flex flex-col gap-8 items-center mb-4 xs:flex-row xs:gap-24">
            <div className="aspect-square h-44 rounded-full p-1 bg-white border border-gray-400">
                <img src={userdata.avatar_url} alt={user} className="w-full h-auto rounded-full" />
            </div>
            <div className="flex flex-col gap-1 text-center xs:text-justify">
                <h2 className="text-2xl">{userdata.name}</h2>
                <div className="text-sm">{userdata.bio}</div>
                {
                    userdata.location !== null &&
                    <div className="flex gap-1 items-center">
                        <LocationMarkerIcon className="h-4 w-4" />
                        <div className="text-sm">{userdata.location}</div>
                    </div>
                }
                {
                    userdata.twitter_username !== null &&
                    <div className="flex gap-2">
                        <TwitterIcon className="h-6 w-6" style={{ height: '1.5rem', width: '1.5rem' }} />
                        <a href={`ttps://twitter.com/${userdata.twitter_username}`}>
                            https://twitter.com/{userdata.twitter_username}
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}

export default HeaderProfile
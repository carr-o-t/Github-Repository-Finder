import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import Button from './Button'

function RepoCard({
    name,
    description,
    langURL,
    id
}) {

    const { data: langdata } = useQuery(['langdata', id], () => {
        return axios.get(`${langURL}`)
    })


    return (
        <div className="flex flex-col p-2 gap-2 bg-white shadow-lg rounded-xl max-w-sm w-[calc(100vw_-_64px)] mx-auto justify-between">
            <div className="">{name}</div>
            <div className="text-xs text-gray-500 line-clamp-3">{description}</div>
            <div className="flex gap-1 flex-wrap">
                {
                    Object.keys(langdata?.data ?? {}).map((key) => {
                        return (
                            <Button btnContent={key} bgColor={key} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RepoCard
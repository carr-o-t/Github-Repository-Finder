import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { LinkIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid'
import RepoCard from '../components/RepoCard'
import SkeletonLoader from '../components/SkeletonLoader'
import HeaderProfile from '../components/HeaderProfile'
import CircleLoader from '../components/CircleLoader'

function Result() {

    const [currentPage, setCurrentPage] = useState(1)
    const prevPage = useRef([])
    const nextPage = useRef([])

    const { user } = useParams()
    const [range, setRange] = useState([])
    const [error, setError] = useState(false)

    const userData = useQuery(['gitprofile', user], () => {
        setRange([])
        return axios.get(`https://api.github.com/users/${user}`)
    }, {
        onSuccess: (data) => {
            const totalPageCount = Math.ceil(data.data ? data.data.public_repos / 6 : 0)
            setRange(new Array(totalPageCount).fill(1))
        },
        onError: (data) => {
            setError(true)
        },
        refetchOnWindowFocus: true
    })
    const userdata = userData.data?.data
    // console.log(userdata);

    const { data: repoData, refetch, isLoading: loadingRepo } = useQuery(['repodata', currentPage], () => {
        return axios.get(`https://api.github.com/users/${user}/repos?page=${currentPage}&per_page=6`)
    }, {
        refetchOnWindowFocus: true
    })

    React.useEffect(() => {
        refetch()
    }, [currentPage])

    const handlePrev = (prev) => {
        prevPage.current.push(prev)
        console.log(prevPage)
    }

    const handleNext = (next) => {
        nextPage.current.push(next)
        console.log(nextPage)
    }

    if (userData.isLoading) return <CircleLoader />
    if (error) return <h1>ERROR</h1>
    return (
        <div className="p-8">
            <div className="mx-auto max-w-3xl">
                <HeaderProfile userdata={userdata} user={user} />
                <div className="flex gap-1 items-center justify-center xs:justify-start mb-12">
                    <LinkIcon className="h-4 w-4" />
                    <a className="text-xs" href={`https://github.com/${userdata.login}`}>
                        https://github.com/{userdata.login}
                    </a>
                </div>
                <div className="grid mdlg:grid-cols-2 sm:gap-4 mx-auto gap-4 justify-center">
                    {
                        loadingRepo ? <>
                            <SkeletonLoader />
                            <SkeletonLoader />
                            <SkeletonLoader />
                            <SkeletonLoader />
                            <SkeletonLoader />
                            <SkeletonLoader />
                        </> :
                            repoData?.data?.map((repo) => {
                                return (
                                    <RepoCard key={repo.name} name={repo.name} description={repo.description} langURL={repo.languages_url} id={repo.id} />
                                )
                            })
                    }
                </div>
                <div className="flex justify-center gap-3 mt-10 max-w-2xl overflow-hidden mx-auto flex-wrap items-center">
                    <button className={"px-4 py-1 bg-white shadow-lg rounded flex items-center gap-1" + (prevPage.length === 0 ? 'opacity-50 cursor-not-allowed' : '')} onClick={(e) => {

                        let nextElement = prevPage.current.pop()
                        handlePrev(currentPage)
                        handleNext(currentPage)
                        setCurrentPage(nextElement)
                        // console.log(prevPage);
                    }}
                        disabled={prevPage.length === 0}
                    >
                        <ArrowLeftIcon className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-600">prev</span>
                    </button>
                    <button className={"px-4 py-1 bg-white shadow-lg rounded" + (currentPage === 1 ? 'opacity-50 cursor-not-allowed' : '')} onClick={(e) => {
                        handlePrev(currentPage)
                        setCurrentPage((prev) => prev - 1)
                    }} disabled={currentPage === 1} >
                        <ChevronDoubleLeftIcon className="h-4 w-4 text-gray-600" />
                    </button>
                    {

                        range.map((item, index) => {
                            return (
                                <button key={`${item}${index}`} className={"px-4 py-1 bg-white hover:bg-gray-300 shadow-lg rounded " + (currentPage === index + 1 ? 'bg-yellow-400 text-white font-semibold' : '')} onClick={() => {
                                    handlePrev(currentPage)
                                    setCurrentPage(index + 1)
                                }}>
                                    {index + 1}
                                </button>
                            )
                        })
                    }
                    <button className={"px-4 py-1 bg-white shadow-lg rounded" + (currentPage === range.length ? 'opacity-50 cursor-not-allowed' : '')} onClick={(e) => {
                        handlePrev(currentPage)
                        setCurrentPage((prev) => prev + 1)

                    }}
                        onChange={(e) => {

                        }}
                        disabled={currentPage === range.length}>
                        <ChevronDoubleRightIcon className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className={"px-4 py-1 bg-white shadow-lg rounded flex items-center gap-1"} onClick={(e) => {
                        let prevElement = nextPage.current.pop()
                        handlePrev(prevElement)
                        setCurrentPage(prevElement)
                        console.log(nextPage);
                    }} >
                        <span className="text-gray-600">next</span>
                        <ArrowRightIcon className="h-4 w-4 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Result
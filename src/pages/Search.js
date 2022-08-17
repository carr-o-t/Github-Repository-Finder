import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Search() {

  const [username, setUsername] = React.useState('')

  const naviagte = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    naviagte(`/${username}`)
  }


  return (
    <div >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-sm w-[calc(100%_-_2rem)] px-4 py-16 bg-white shadow-lg rounded-xl ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 justify-center text-center ">
          <label htmlFor="" className="text-lg sm:text-2xl text-gray-600">Enter The Github Username</label>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="max-w-[17rem] w-[calc(100%_-_70px)] mx-auto p-[0.7rem] border border-gray-4000 rounded-md text-gray-500 focus:outline-yellow-500" />
        </form>
      </div>
    </div>
  )
}

export default Search
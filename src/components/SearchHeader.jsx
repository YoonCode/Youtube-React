import React, { useState } from 'react'
import { BsYoutube, BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function SearchHeader() {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/videos/${text}`)
  }

  return (
    <header>
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  )
}

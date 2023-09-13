import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleBookmarks = blog => {
    const newBookmarks = [... bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  return (
    <main>
    <Header />
    <div className='md:flex max-w-6xl mx-auto'>
    <Blogs handleBookmarks={handleBookmarks}/>
    <Bookmarks />
    </div>
    </main>
  )
}

export default App

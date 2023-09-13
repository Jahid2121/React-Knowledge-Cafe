import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([])

  const [readingTime, setReadingtime] = useState(0)

  const handleBookmarks = blog => {
    const newBookmarks = [... bookmarks, blog]
    setBookmarks(newBookmarks)
  }

    const handleMarkAsRead = (id, time) =>{
      setReadingtime(readingTime + time)   
      const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
      setBookmarks( remainingBookmarks)
    }

  return (
    <main>
    <Header />
    <div className='md:flex max-w-6xl mx-auto'>
    <Blogs handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead}/>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}/>
    </div>
    </main>
  )
}

export default App

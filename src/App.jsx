import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([])

  const [readingTime, setReadingtime] = useState(0)
  console.log(readingTime)

  const handleBookmarks = blog => {
    const newBookmarks = [... bookmarks, blog]
    setBookmarks(newBookmarks)
  }

    const handleMarkAsRead = time =>{
      setReadingtime(readingTime + time)      
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

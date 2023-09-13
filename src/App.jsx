import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <main>
    <Header />
    <div className='md:flex'>
    <Blogs />
    <Bookmarks />
    </div>
    </main>
  )
}

export default App

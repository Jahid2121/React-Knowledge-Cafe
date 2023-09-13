import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))   
    }, [])
    return (
        <div className=" md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    handleBookmarks={handleBookmarks}
                     key={blog.id}
                     blog={blog}/>)
            }
        </div>
    );
};

export default Blogs;

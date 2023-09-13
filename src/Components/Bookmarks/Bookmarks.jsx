import Proptypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div>
                <h3 className='text-3xl'>ReadingTime:   {readingTime}</h3>
            </div>

            
            <h2 className="text-3xl  text-center">Bookmarked blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} />)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: Proptypes.array,
    readingTime: Proptypes.number
}

export default Bookmarks;

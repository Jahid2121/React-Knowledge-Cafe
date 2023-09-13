import Proptypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <h2 className="text-3xl  text-center">Bookmarked blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: Proptypes.array
}

export default Bookmarks;

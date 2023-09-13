import Proptypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-3xl">Bookmarked blogs: {bookmarks.length}</h2>
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

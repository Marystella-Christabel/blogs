import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleLike } from '../store/postsSlice';
import './PostCard.css';

const PostCard = ({
    id,
    author = { name: "Jane Doe", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", handle: "@janedoe" },
    title = "The Art of Modern Web Design",
    excerpt = "Exploring the intersection of aesthetics and functionality in today's digital landscape.",
    date = "Oct 24, 2023",
    likes = 142,
    likedByUser = false,
    comments = 28,
    image = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
}) => {
    const dispatch = useDispatch();

    const handleLike = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(toggleLike(id));
    };

    return (
        <article className="card postcard animate-fade-in">
            <div className="postcard-header flex justify-between items-center">
                <Link to="/profile" className="postcard-author flex items-center gap-sm">
                    <img src={author.avatar} alt={author.name} className="avatar" />
                    <div className="author-info">
                        <h4 className="author-name">{author.name}</h4>
                        <span className="author-meta">{author.handle} · {date}</span>
                    </div>
                </Link>
                <button className="btn-icon" aria-label="More options">
                    <MoreHorizontal size={20} />
                </button>
            </div>

            <Link to={`/post/${id}`} className="postcard-body">
                <h3 className="postcard-title">{title}</h3>
                <p className="postcard-excerpt">{excerpt}</p>
                {image && (
                    <div className="postcard-image-container">
                        <img src={image} alt={title} className="postcard-image" loading="lazy" />
                    </div>
                )}
            </Link>

            <div className="postcard-footer flex items-center justify-between">
                <div className="postcard-actions flex gap-lg">
                    <button className={`action-btn flex items-center gap-xs ${likedByUser ? 'liked' : ''}`} onClick={handleLike}>
                        <Heart size={20} className={`icon-heart ${likedByUser ? 'filled' : ''}`} />
                        <span>{likes}</span>
                    </button>
                    <Link to={`/post/${id}#comments`} className="action-btn flex items-center gap-xs">
                        <MessageCircle size={20} className="icon-comment" />
                        <span>{comments}</span>
                    </Link>
                </div>
                <button className="action-btn flex items-center gap-xs">
                    <Share2 size={20} />
                </button>
            </div>
        </article>
    );
};

export default PostCard;

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLike } from '../store/postsSlice';
import CommentSection from '../Components/CommentSection';
import { Calendar, Clock, Share2, Heart, Bookmark } from 'lucide-react';
import './PostDetails.css';

const PostDetails = () => {
    const { id } = useParams();
    const postId = Number(id);
    const post = useSelector((state) => state.posts.posts.find(p => p.id === postId));
    const dispatch = useDispatch();

    if (!post) {
        return (
            <div className="container text-center" style={{ padding: '4rem 0' }}>
                <h2 style={{ color: 'var(--gold)' }}>Post not found</h2>
                <p style={{ color: 'var(--text-secondary)' }}>The post you are looking for does not exist.</p>
            </div>
        );
    }

    const handleLike = () => {
        dispatch(toggleLike(postId));
    };

    return (
        <article className="post-details-page">

            <header className="post-header container">
                <h1 className="post-title">{post.title}</h1>

                <div className="post-meta flex items-center justify-between">
                    <div className="author-info flex items-center gap-md">
                        <img src={post.author.avatar} alt={post.author.name} className="avatar post-avatar" />
                        <div className="meta-text">
                            <span className="author-name">{post.author.name}</span>
                            <div className="meta-data flex items-center gap-sm">
                                <span className="flex items-center gap-xs"><Calendar size={14} /> {post.date}</span>
                                <span>·</span>
                                <span className="flex items-center gap-xs"><Clock size={14} /> 5 min read</span>
                            </div>
                        </div>
                    </div>

                    <div className="post-actions flex gap-sm">
                        <button className="btn-icon circle" aria-label="Save post"><Bookmark size={20} /></button>
                        <button className="btn-icon circle" aria-label="Share post"><Share2 size={20} /></button>
                    </div>
                </div>
            </header>

            {post.image && (
                <div className="post-hero-image">
                    <img src={post.image} alt={post.title} />
                </div>
            )}

            <div className="container">
                <div className="post-content-wrapper">

                    <div
                        className="post-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {post.tags && (
                        <div className="post-tags flex gap-sm">
                            {post.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    )}

                    <div className="engagement-bar flex items-center justify-between">
                        <div className="flex gap-lg">
                            <button className={`action-btn flex items-center gap-xs ${post.likedByUser ? 'liked' : ''}`} onClick={handleLike}>
                                <Heart size={24} className={post.likedByUser ? 'filled' : ''} /> {post.likes} Likes
                            </button>
                        </div>
                    </div>

                    <div className="author-bio-box card flex gap-md items-center">
                        <img src={post.author.avatar} alt={post.author.name} className="avatar large-avatar" />
                        <div>
                            <h4 className="author-box-name">Written by {post.author.name}</h4>
                            <p className="author-box-desc">Passionate writer and creator on Blogza.</p>
                            <button className="btn btn-outline btn-sm-details">Follow</button>
                        </div>
                    </div>

                    <div id="comments">
                        <CommentSection postId={postId} />
                    </div>

                </div>
            </div>
        </article>
    );
};

export default PostDetails;

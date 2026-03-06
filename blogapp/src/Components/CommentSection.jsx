import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../store/commentsSlice';
import { Send } from 'lucide-react';
import './CommentSection.css';

const CommentSection = ({ postId }) => {
    const comments = useSelector((state) => state.comments.commentsByPostId[postId] || []);
    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const comment = {
            id: Date.now(),
            author: isLoggedIn ? user.name : "Guest User",
            avatar: isLoggedIn ? user.avatar : "https://i.pravatar.cc/150?u=guest",
            content: newComment,
            date: "Just now"
        };

        dispatch(addComment({ postId, comment }));
        setNewComment("");
    };

    return (
        <div className="comment-section">
            <h3 className="section-title">Comments ({comments.length})</h3>

            <form onSubmit={handleSubmit} className="comment-form">
                <img src={isLoggedIn ? user.avatar : "https://i.pravatar.cc/150?u=guest"} alt="User" className="avatar comment-avatar" />
                <div className="input-group">
                    <textarea
                        className="input comment-input"
                        placeholder="Write a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        rows={2}
                    />
                    <button type="submit" className="btn btn-primary submit-btn flex items-center justify-center">
                        <Send size={18} />
                    </button>
                </div>
            </form>

            <div className="comment-list">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment-item animate-fade-in">
                        <img src={comment.avatar} alt={comment.author} className="avatar comment-avatar" />
                        <div className="comment-content">
                            <div className="comment-header flex justify-between items-center">
                                <span className="comment-author">{comment.author}</span>
                                <span className="comment-date">{comment.date}</span>
                            </div>
                            <p className="comment-text">{comment.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;

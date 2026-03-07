import { useSelector } from 'react-redux';
import PostCard from '../components/PostCard';
import { Settings, MapPin, Link as LinkIcon, Calendar } from 'lucide-react';
import './Profile.css';

const Profile = () => {
    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const allPosts = useSelector((state) => state.posts.posts);

    const profileUser = isLoggedIn && user ? user : {
        name: "Jane Doe",
        handle: "@janedoe",
        bio: "Frontend Developer & UI/UX Enthusiast. Passionate about creating beautiful and functional web applications.",
        location: "San Francisco, CA",
        website: "janedoe.dev",
        joined: "March 2023",
        followers: 1240,
        following: 350,
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        cover: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80"
    };

    const userPosts = allPosts.filter(p => p.author.handle === (profileUser.handle || "@janedoe"));

    return (
        <div className="profile-page">

            <div className="profile-cover">
                <img src={profileUser.cover || "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80"} alt="Cover" className="cover-img" />
                <div className="cover-overlay" />
            </div>

            <div className="container">
                <div className="profile-header card">

                    <div className="profile-avatar-container">
                        <img src={profileUser.avatar || "https://i.pravatar.cc/150?u=a042581f4e29026704d"} alt={profileUser.name} className="profile-avatar" />
                    </div>

                    <div className="profile-info flex justify-between">
                        <div className="profile-details">
                            <h1 className="profile-name">{profileUser.name}</h1>
                            <span className="profile-handle">{profileUser.handle}</span>

                            <p className="profile-bio">{profileUser.bio}</p>

                            <div className="profile-meta flex gap-md">
                                <span className="meta-item flex items-center gap-xs">
                                    <MapPin size={16} /> {profileUser.location || "Earth"}
                                </span>
                                <span className="meta-item flex items-center gap-xs">
                                    <LinkIcon size={16} /> <a href="#" className="meta-link">{profileUser.website || "blogza.dev"}</a>
                                </span>
                                <span className="meta-item flex items-center gap-xs">
                                    <Calendar size={16} /> Joined {profileUser.joined || "2023"}
                                </span>
                            </div>

                            <div className="profile-stats flex gap-lg">
                                <div className="stat">
                                    <span className="stat-value">{profileUser.followers || 0}</span>
                                    <span className="stat-label">Followers</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">{profileUser.following || 0}</span>
                                    <span className="stat-label">Following</span>
                                </div>
                            </div>
                        </div>

                        <div className="profile-actions">
                            <button className="btn btn-outline flex items-center gap-sm">
                                <Settings size={18} /> Edit Profile
                            </button>
                        </div>
                    </div>

                </div>

                <div className="profile-content">
                    <div className="content-tabs flex gap-xl">
                        <button className="tab active">Posts</button>
                        <button className="tab">Likes</button>
                        <button className="tab">About</button>
                    </div>

                    <div className="profile-feed">
                        {userPosts.length > 0 ? userPosts.map(post => (
                            <PostCard key={post.id} {...post} />
                        )) : (
                            <p className="empty-feed">No posts yet. Start writing to see your posts here!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

import { useSelector } from 'react-redux';
import PostCard from '../Components/PostCard';
import { TrendingUp, Activity, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
    const posts = useSelector((state) => state.posts.posts);

    return (
        <div className="home-page container">

            {/* Hero Section */}
            <section className="hero section text-center">
                <h1 className="hero-title">Welcome to <span className="text-gold">Blogza</span></h1>
                <p className="hero-subtitle">Discover stories, thinking, and expertise from writers on any topic.</p>
                <div className="hero-actions flex justify-center gap-md">
                    <button className="btn btn-primary">Start Reading</button>
                    <button className="btn btn-outline">Write a Story</button>
                </div>
            </section>

            <div className="home-layout">

                {/* Main Feed */}
                <div className="main-feed">
                    <div className="feed-header flex items-center justify-between">
                        <h2 className="section-heading flex items-center gap-sm">
                            <Activity className="icon-gold" /> Recent Activity
                        </h2>
                        <div className="feed-filters flex gap-sm">
                            <button className="filter-btn active">Latest</button>
                            <button className="filter-btn">Top</button>
                        </div>
                    </div>

                    <div className="posts-container">
                        {posts.map(post => (
                            <PostCard key={post.id} {...post} />
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="sidebar">

                    <div className="sidebar-widget card">
                        <h3 className="widget-title flex items-center gap-sm">
                            <TrendingUp size={18} className="icon-gold" /> Trending Topics
                        </h3>
                        <div className="tags-container">
                            {['Technology', 'Design', 'Development', 'React', 'UI/UX', 'JavaScript'].map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="sidebar-widget card">
                        <h3 className="widget-title flex items-center gap-sm">
                            <Star size={18} className="icon-gold" /> Top Creators
                        </h3>
                        <ul className="creators-list">
                            {[
                                { name: 'Elena Rodriguez', followers: '12.4k' },
                                { name: 'David Chen', followers: '8.2k' },
                                { name: 'Sarah Smith', followers: '5.1k' }
                            ].map((creator, i) => (
                                <li key={i} className="creator-item flex items-center justify-between">
                                    <div className="creator-info flex items-center gap-sm">
                                        <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt={creator.name} className="avatar creator-avatar" />
                                        <span className="creator-name">{creator.name}</span>
                                    </div>
                                    <button className="btn-follow">Follow</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                </aside>
            </div>
        </div>
    );
};

export default Home;

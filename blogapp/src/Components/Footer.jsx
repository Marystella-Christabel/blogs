import { BookOpen, Twitter, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">

                    <div className="footer-brand flex flex-col gap-sm">
                        <Link to="/" className="footer-logo flex items-center gap-sm">
                            <BookOpen size={24} className="icon-gold" />
                            <h2>Blogza</h2>
                        </Link>
                        <p className="footer-desc">
                            Discover stories, thinking, and expertise from writers on any topic. A beautiful place to read and write.
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/auth">Sign In</Link></li>
                            <li><Link to="/auth">Sign Up</Link></li>
                        </ul>
                    </div>

                    <div className="footer-social-group">
                        <h3>Connect</h3>
                        <div className="social-icons flex items-center gap-md">
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Github"><Github size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom text-center">
                    <p>&copy; {new Date().getFullYear()} Blogza. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

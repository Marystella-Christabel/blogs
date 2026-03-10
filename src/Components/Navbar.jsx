import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { LogIn, Menu, X, BookOpen, LogOut } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isLoggedIn, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="container flex justify-between items-center navbar-container">

                <Link to="/" className="navbar-logo flex items-center">
                    <div className="logo-icon">
                        <BookOpen size={24} color="#0D0D0D" />
                    </div>
                    <h1>Blogza</h1>
                </Link>

                <div className="navbar-links flex items-center">
                    <Link to="/" className="nav-link">Home</Link>
                    {isLoggedIn && <Link to="/profile" className="nav-link">Profile</Link>}
                    <div className="nav-actions flex items-center gap-sm">
                        {isLoggedIn ? (
                            <div className="user-menu flex items-center gap-md">
                                <Link to="/profile" className="user-chip flex items-center gap-sm">
                                    <img src={user?.avatar || "https://i.pravatar.cc/150?u=current_user"} alt="avatar" className="avatar nav-avatar" />
                                    <span className="user-name">{user?.name?.split(' ')[0]}</span>
                                </Link>
                                <button onClick={handleLogout} className="btn btn-outline btn-sm flex items-center gap-xs">
                                    <LogOut size={16} /> Logout
                                </button>
                            </div>
                        ) : (
                            <Link to="/auth" className="btn btn-primary flex items-center gap-sm">
                                <LogIn size={18} /> Sign In
                            </Link>
                        )}
                    </div>
                </div>

                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="mobile-menu">
                    <Link to="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
                    {isLoggedIn && <Link to="/profile" className="mobile-link" onClick={toggleMenu}>Profile</Link>}
                    {isLoggedIn ? (
                        <button className="btn btn-outline mobile-btn flex justify-center items-center gap-sm" onClick={() => { handleLogout(); toggleMenu(); }}>
                            <LogOut size={18} /> Logout
                        </button>
                    ) : (
                        <Link to="/auth" className="btn btn-primary mobile-btn flex justify-center items-center gap-sm" onClick={toggleMenu}>
                            <LogIn size={18} /> Sign In
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;

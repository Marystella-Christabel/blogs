import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, signup } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, LogIn, UserPlus } from 'lucide-react';
import './Auth.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
        setFormData({ name: '', email: '', password: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name: formData.name || formData.email.split('@')[0],
            email: formData.email,
            handle: `@${formData.email.split('@')[0]}`,
            avatar: `https://i.pravatar.cc/150?u=${formData.email}`,
            bio: "A passionate writer on Blogza.",
            location: "The Internet",
            website: "blogza.dev",
            joined: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            followers: 0,
            following: 0,
            cover: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80"
        };

        if (isLogin) {
            dispatch(login(userData));
        } else {
            dispatch(signup(userData));
        }
        navigate('/');
    };

    return (
        <div className="auth-page flex justify-center items-center">
            <div className="auth-card card">

                <div className="auth-header text-center">
                    <h1 className="auth-title">{isLogin ? 'Welcome Back' : 'Join Blogza'}</h1>
                    <p className="auth-subtitle">
                        {isLogin
                            ? 'Enter your details to access your account.'
                            : 'Create an account to start sharing your stories.'}
                    </p>
                </div>

                <form className="auth-form flex flex-col gap-md" onSubmit={handleSubmit}>

                    {!isLogin && (
                        <div className="input-group-auth">
                            <label htmlFor="name">Full Name</label>
                            <div className="input-wrapper">
                                <User size={18} className="input-icon" />
                                <input
                                    type="text"
                                    id="name"
                                    className="input with-icon"
                                    placeholder="Jane Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required={!isLogin}
                                />
                            </div>
                        </div>
                    )}

                    <div className="input-group-auth">
                        <label htmlFor="email">Email Address</label>
                        <div className="input-wrapper">
                            <Mail size={18} className="input-icon" />
                            <input
                                type="email"
                                id="email"
                                className="input with-icon"
                                placeholder="jane@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group-auth">
                        <label htmlFor="password">Password</label>
                        <div className="input-wrapper">
                            <Lock size={18} className="input-icon" />
                            <input
                                type="password"
                                id="password"
                                className="input with-icon"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary auth-submit flex items-center justify-center gap-sm">
                        {isLogin ? <LogIn size={18} /> : <UserPlus size={18} />}
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                </form>

                <div className="auth-footer text-center">
                    <p>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button className="auth-toggle-btn" onClick={toggleAuthMode}>
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </button>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Auth;

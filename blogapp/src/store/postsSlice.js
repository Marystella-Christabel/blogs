import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [
        {
            id: 1,
            author: { name: "David Chen", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026701d", handle: "@davidchen" },
            title: "Mastering React 19: New Patterns and Practices",
            excerpt: "Deep dive into the latest features of React 19. Learn how the new compiler transforms the way we write components and handle state.",
            content: `<p>React 19 brings a wave of new features and improvements that fundamentally change how we build applications. In this article, we'll dive deep into the new compiler, updated state management patterns, and what it means for your existing codebase.</p><h2>The New Compiler</h2><p>One of the most anticipated features is the new React Compiler. It automatically memoizes your components and hooks, eliminating the need for manual <code>useMemo</code> and <code>useCallback</code> optimization in most cases. This means cleaner code and fewer performance gotchas.</p><blockquote>"The best code is no code at all. The new compiler writes the performance optimizations so you don't have to." - React Core Team</blockquote><h2>Updated State Management</h2><p>With the introduction of new built-in hooks, managing complex state has become more intuitive. We are moving away from bloated context providers towards more atomic state updates.</p><h3>Key Takeaways:</h3><ul><li>Automatic memoization out of the box.</li><li>Improved server-side rendering performance.</li><li>Simplified data fetching patterns.</li></ul><p>As we transition into this new era of React development, it's crucial to understand these underlying changes to build fast, scalable applications.</p>`,
            date: "Today, 10:30 AM",
            likes: 342,
            likedByUser: false,
            comments: 56,
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
            tags: ["React", "JavaScript", "Web Development"]
        },
        {
            id: 2,
            author: { name: "Elena Rodriguez", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026702d", handle: "@elenadev" },
            title: "The psychology of color in UI design",
            excerpt: "Why certain color palettes evoke specific emotions. A study on how dark tones and gold accents create a premium feel.",
            content: `<p>Color is one of the most powerful tools a designer has. The right palette can evoke trust, excitement, or luxury. In this article, we explore why dark themes with gold accents have become a hallmark of premium digital products.</p><h2>The Power of Dark</h2><p>Dark backgrounds reduce eye strain, save battery on OLED screens, and create a canvas that lets accent colors truly shine. When paired with gold, it creates an unmistakable sense of luxury and exclusivity.</p><h2>Gold as an Accent</h2><p>Gold has been associated with wealth, achievement, and quality for thousands of years. In UI design, a warm gold accent draws attention to CTAs and key interactive elements without the harsh contrast of pure yellow.</p>`,
            date: "Yesterday",
            likes: 890,
            likedByUser: false,
            comments: 124,
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
            tags: ["Design", "UI/UX", "Color Theory"]
        },
        {
            id: 3,
            author: { name: "Marcus Johnson", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d", handle: "@marcusj" },
            title: "Building scalable application architectures",
            excerpt: "Lessons learned from scaling a monolithic application to microservices. The good, the bad, and the unexpected challenges.",
            content: `<p>Scaling is rarely a straight line. In this article, I share the real-world lessons from migrating a monolithic Node.js application to a microservices architecture serving 2 million daily active users.</p><h2>When to Scale</h2><p>The first mistake teams make is scaling too early. We held off until our monolith was handling 500k requests per minute and response times were climbing past 2 seconds. That was our signal.</p><h2>Choosing Your Battles</h2><p>Not every service needs to be micro. We identified the three hottest paths—auth, feed generation, and notifications—and extracted those first. The rest of the monolith remained intact.</p>`,
            date: "Oct 22, 2023",
            likes: 215,
            likedByUser: false,
            comments: 42,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
            tags: ["Architecture", "Backend", "DevOps"]
        },
        {
            id: 4,
            author: { name: "Jane Doe", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", handle: "@janedoe" },
            title: "How to Build a Design System from Scratch",
            excerpt: "A comprehensive guide on creating a robust design system that scales with your application. Learn about color tokens like our Black & Gold theme.",
            content: `<p>A design system is the single source of truth for your product's visual language. Here's how to build one from scratch that your entire team will love.</p><h2>Start with Tokens</h2><p>Design tokens are the atoms of your system—colors, spacing, typography, shadows. Define these first and everything else builds on top.</p>`,
            date: "Oct 15, 2023",
            likes: 520,
            likedByUser: false,
            comments: 89,
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
            tags: ["Design Systems", "CSS", "Frontend"]
        },
        {
            id: 5,
            author: { name: "Jane Doe", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", handle: "@janedoe" },
            title: "My Journey into Web Development",
            excerpt: "Reflecting on my first year as a professional developer. The tutorials I followed, the mistakes I made, and the projects that got me hired.",
            content: `<p>One year ago, I wrote my first line of HTML. Today, I'm a frontend engineer at a Series B startup. Here's the unfiltered story of how I got here.</p>`,
            date: "Sep 2, 2023",
            likes: 890,
            likedByUser: false,
            comments: 142,
            image: null,
            tags: ["Career", "Learning", "Web Development"]
        }
    ],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        toggleLike(state, action) {
            const post = state.posts.find(p => p.id === action.payload);
            if (post) {
                post.likedByUser = !post.likedByUser;
                post.likes += post.likedByUser ? 1 : -1;
            }
        },
    },
});

export const { toggleLike } = postsSlice.actions;
export default postsSlice.reducer;

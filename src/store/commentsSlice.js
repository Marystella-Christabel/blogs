import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    commentsByPostId: {
        1: [
            { id: 101, author: "Alex Johnson", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", content: "This is exactly what I was looking for. The black and gold aesthetic really pops!", date: "2 hours ago" },
            { id: 102, author: "Sarah Smith", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026703d", content: "Great article! I love the modern approach to the UI components.", date: "5 hours ago" },
        ],
        2: [
            { id: 201, author: "Marcus Johnson", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d", content: "Fantastic breakdown of color psychology. The gold accent theory is spot on.", date: "1 day ago" },
        ],
        3: [],
        4: [
            { id: 401, author: "David Chen", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026701d", content: "This is a must-read for anyone starting a new project!", date: "3 days ago" },
        ],
        5: [],
    },
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment(state, action) {
            const { postId, comment } = action.payload;
            if (!state.commentsByPostId[postId]) {
                state.commentsByPostId[postId] = [];
            }
            state.commentsByPostId[postId].unshift(comment);
        },
    },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;

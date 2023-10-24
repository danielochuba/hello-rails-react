import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMessage = createAsyncThunk(
    'message/fetchMessage',
    async () => {
        try {
            const response = await fetch('/messages.json');
            const data = await response.json();
            return data.message;
    
        } catch (error) {
            console.error(error);
        }
    }
        
    );

    const initialState = {
        message: '',
        status: 'idle',
    };

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchMessage.pending, (state, action) => {
                state.status = 'loading';
            }
            );
        builder.addCase(
            fetchMessage.rejected, (state, action) => {
                state.status = 'failed';
            }
            );
        builder.addCase(
            fetchMessage.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;

            }
            );
    }
});

export default messageSlice.reducer;
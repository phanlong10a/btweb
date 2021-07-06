import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'todos',
    initialState: {
        loading: true,
        listWork: [],
        error: null
    },
    reducers: {
        // dinh nghia cac action cap nhap state
        getListWork: (state, action) => {
        //Redux Toolkit allows us to write "mutating" logic in reducers
        state.loading = action.payload.loading
        },
        getDataSuccess: (state, action) => {
          state.error = null;
          state.listWork = action.payload.data
        },
        getDataFail: (state, action) => {
          state.dataUsers= {};
          state.error = action.payload.error;
        }
    }
});

// xem method createSlice tra ve nhung cai gi ???
// console.log(slice);

// export cac actions de sau nay dispatch vao store
export const { getListWork, getDataFail, getDataSuccess } = slice.actions;

// export selector get state
export const selectCounter = state => state.todos;

// export reducer
export default slice.reducer;
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

//  NOTE : Fetched the post 
export const fetchedPost = createAsyncThunk('post/fetchedPost', async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?limit=5')
    console.log(response)
    return response.json()
})


// NOTE : post slice 
const postClice = createSlice({
    name:"posts",
    initialState:{
        posts:[],
        loading:false,
        error:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchedPost.pending ,(state)=>{
            state.loading=true
        })
        .addCase(fetchedPost.fulfilled ,(state,action) =>{
            state.loading=false,
            state.posts = action.payload
        })
        .addCase(fetchedPost.rejected, (state,action)=>{
        state.loading = false,
        state.error = action.error.message
        })
    }
})

// NOTE : export it 
export default postClice.reducer
 
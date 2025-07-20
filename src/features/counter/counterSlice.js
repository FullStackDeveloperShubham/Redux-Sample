import { createSlice } from "@reduxjs/toolkit";


// NOTE : initailase state / initiale page state
const initialState = {
    value:2, // state initiale value
    history:[]  // track the all changes
}

// NOTE : create counter slice
export const counterSlice = createSlice({
    name:"Counter", //used to call the action types
    initialState,
    reducers:{
        // simple increament 
        increment:(state) =>{
            state.value +=1 
            state.history.push(`value increment to ${state.value} `)
        },

        // simple subsctract method
        subsctract : (state)=>{
            state.value -=1
            state.history.push(`subscacted valyes to ${state.value}`)
        },

        // multiply the values
        multiplication : (state)=>{
            state.value *=2
            state.history.push(`value multiply ${state.value}`)
        },

        // simple method for divide the value
        divide : (state) =>{
            state.value /=1.4
            state.history.push(`value divide ${state.value}`)
        } ,

        // reset the count 
        reset : (state)=>{
            state.value = initialState.value
            state.history.push(`reset value ${state.value}`)
        },

        // clear the history
        clearHistory:(state)=>{
            state.history = [] //reset the history
        }
    }
})


// NOTE : action created are generated automatically for each reducer
export const {
    increment, // this is action name
    subsctract ,// this is action name
    multiplication,
    divide,
    reset
} = counterSlice.actions;

// NOTE : export thre reducer 
export default counterSlice.reducer
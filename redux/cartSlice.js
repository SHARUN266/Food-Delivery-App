import {createSlice} from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        products:[],
        qty:0,
        total:0
    },
    reducers:{
        addProduct:(state,action)=>{
            state.products.push(action.payload);
            state.qty+=1;
            state.total+=action.payload.price*action.payload.qty
        }
    },
    reset:(state)=>{
        state.products=[];
        state.qty=0;
        state.total=0;

    }
})

export const {addProduct,reset} = cartSlice.actions;

export default cartSlice.reducer;
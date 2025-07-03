import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name : 'cart',
    initialState:{
        items : [],
        totalQuantity : 0,
    },
    reducers : {
        addItem : (state, action) =>{
            const item = action.payload;
            const existingItem = state.items.find(cartItem=> cartItem.id ===item.id);

            if(existingItem){
                existingItem.quantity +=1;
            }
            else{
                state.items.push({...item, quantity : 1})
            }

            state.totalQuantity +=1;
        },

        removeItem : (state, action)=>{
            const id = action.payload;
            const existingItem = state.items.find(cartItem=>cartItem.id===id)

            if(existingItem){
                state.totalQuantity-=1;
                if(existingItem.quantity ===1){
                    state.items = state.items.filter(cartItem=>cartItem.id !==id)
                }
                else{
                    existingItem.quantity -=1;
                }
            }
        },

        clearCart : (state)=>{
            state.items =[];
            state.totalQuantity = 0;
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    modal1: false,
    modal2: false
}

export const slice  = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal(state, action){
            state.modal1 = true
        },
        closeModal(state, action){
            state.modal1 = false
        },
        openModalPost(state, action){
            state.modal2 = true
        },
        closeModalPost(state, action){
            state.modal2 = false
        }
    }
})

export const {openModal,closeModal,openModalPost,closeModalPost}= slice.actions


export default slice.reducer;
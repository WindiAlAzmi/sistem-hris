import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebar: false,
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setSidebar: (state) => {
      state.isSidebar = true;
    },
    deleteSidebar: (state) => {
      state.isSidebar = false;
    },
    setOrDeleteSidebar: (state) => {
      state.isSidebar = !state.isSidebar;
    }
}
});


export const {
    setSidebar, 
    deleteSidebar,
    setOrDeleteSidebar
} = generalSlice.actions;

export default generalSlice.reducer;
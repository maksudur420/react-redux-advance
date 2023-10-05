import { createSlice } from "@reduxjs/toolkit";


const initialState =[
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Eve" },
    { id: 5, name: "Charlie" }
  ];

  const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{}
  })

export const selectAllUsers = state =>state.users;

export default usersSlice.reducer;
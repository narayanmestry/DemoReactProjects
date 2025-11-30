import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces/userInterface";

type UserType = {
    loading:boolean,
    data:User[];
    error: string|null|undefined
}

const initialState:UserType = {
  loading: false,
  data: [],
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const {} = userSlice.actions;
export default userSlice.reducer;

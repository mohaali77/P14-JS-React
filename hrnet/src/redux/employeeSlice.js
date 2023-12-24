import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        employee: [],
    },
    reducers: {
        create: (state, action) => {
            state.employee.push(action.payload);
        },
    },
});

export const { create } = employeeSlice.actions;
export const selectEmployee = (state) => state.employee.employee;
export default employeeSlice.reducer;

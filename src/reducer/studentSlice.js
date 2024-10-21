import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: 'students',
    initialState: {
        details: [
            { name: "NIKITA NALANKILLLI", rollno: "21ECR132", total_mark: 59, cgpa: 5.9 },
            { name: "NISHITA SHREE", rollno: "21ECR130", total_mark: 98, cgpa: 9.8 },
            { name: "NIRMALA", rollno: "21ECR131", total_mark: 28, cgpa: 2.8 },
            { name: "NALANKILLI", rollno: "21ECR138", total_mark: 48, cgpa: 4.8 },
            { name: "SHEELA", rollno: "21ECR133", total_mark: 35, cgpa: 3.5 },
            { name: "JAYANTHI", rollno: "21ECR134", total_mark: 61, cgpa: 6.1 },
            { name: "KRISHNAN", rollno: "21ECR135", total_mark: 24, cgpa: 2.4 },
            { name: "MITHISH", rollno: "21ECR136", total_mark: 79, cgpa: 7.9 }
        ],
        filteredDetails: []
    },
    reducers: {
        sortAscending: (state) => {
            state.filteredDetails = [...state.details].sort((a, b) => a.total_mark - b.total_mark);
        },
        sortDescending: (state) => {
            state.filteredDetails = [...state.details].sort((a, b) => b.total_mark - a.total_mark);
        },
    }
});

export const { sortAscending, sortDescending } = studentSlice.actions;

export default studentSlice.reducer;
